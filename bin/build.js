const fs = require('fs');
const glob = require('glob');
const camelcase = require('camelcase');
const uppercamelcase = require('uppercamelcase');
const path = require('path');
const cheerio = require('cheerio');
const prettier = require('prettier');

const rootDir = path.join(__dirname, '..');

const initialTypeDefinitions = `/// <reference types="react" />
import { ComponentType, SVGAttributes } from 'react';

interface Props extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

type Icon = ComponentType<Props>;
`;

glob(`${rootDir}/src/feather/icons/**.svg`, (err, icons) => {
  fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');
  fs.writeFileSync(
    path.join(rootDir, 'src', 'index.d.ts'),
    initialTypeDefinitions,
    'utf-8'
  );

  icons.forEach(i => {
    const svg = fs.readFileSync(i, 'utf-8');
    const id = path.basename(i, '.svg');
    const ComponentName = (id === 'github') ? 'GitHub' : uppercamelcase(id);
    const $ = cheerio.load(svg, {
      xmlMode: true,
    });
    const fileName = path.basename(i).replace('.svg', '.js');
    const location = path.join(rootDir, 'src/icons', fileName);

    $('*').each((index, el) => {
      Object.keys(el.attribs).forEach(x => {
        if (x.includes('-')) {
          $(el)
            .attr(camelcase(x), el.attribs[x])
            .removeAttr(x);
        }
        if (x === 'stroke') {
          $(el).attr(x, 'currentColor');
        }
      });

      if (el.name === 'svg') {
        $(el).attr('otherProps', '...');
      }
    });

    const element = `
      import React from 'react';
      import PropTypes from 'prop-types';

      const ${ComponentName} = (props) => {
        const { color, size, ...otherProps } = props;
        return (
          ${$('svg')
            .toString()
            .replace(new RegExp('stroke="currentColor"', 'g'), 'stroke={color}')
            .replace('width="24"', 'width={size}')
            .replace('height="24"', 'height={size}')
            .replace('otherProps="..."', '{...otherProps}')}
        )
      };

      ${ComponentName}.propTypes = {
        color: PropTypes.string,
        size: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ]),
      }

      ${ComponentName}.defaultProps = {
        color: 'currentColor',
        size: '24',
      }

      export default ${ComponentName}
    `;

    const component = prettier.format(element, {
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      parser: 'flow',
    });

    fs.writeFileSync(location, component, 'utf-8');

    const exportString = `export ${ComponentName} from './icons/${id}';\r\n`;
    fs.appendFileSync(
      path.join(rootDir, 'src', 'index.js'),
      exportString,
      'utf-8'
    );

    const exportTypeString = `export const ${ComponentName}: Icon;\n`;
    fs.appendFileSync(
      path.join(rootDir, 'src', 'index.d.ts'),
      exportTypeString,
      'utf-8'
    );
  });
});
