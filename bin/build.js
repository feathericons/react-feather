const fs = require('fs');
const glob = require('glob');
const camelcase = require('camelcase');
const uppercamelcase = require('uppercamelcase');
const path = require('path');
const cheerio = require('cheerio');
const prettier = require('prettier');

const rootDir = path.join(__dirname, '..');

glob(`${rootDir}/src/feather/icons/**.svg`, (err, icons) => {
  fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');

  icons.forEach((i) => {
    const svg = fs.readFileSync(i, 'utf-8');
    const id = path.basename(i, '.svg');
    const $ = cheerio.load(svg, {
      xmlMode: true,
    });
    const fileName = path.basename(i).replace('.svg', '.js');
    const location = path.join(rootDir, 'src/icons', fileName);

    $('*').each((index, el) => {
      Object.keys(el.attribs).forEach((x) => {
        if (x.includes('-')) {
          $(el).attr(camelcase(x), el.attribs[x]).removeAttr(x);
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

      const ${uppercamelcase(id)} = (props) => {
        const { color, size, ...otherProps } = props;
        return (
          ${
            $('svg').toString()
              .replace(new RegExp('stroke="currentColor"', 'g'), 'stroke={color}')
              .replace('width="24"', 'width={size}')
              .replace('height="24"', 'height={size}')
              .replace('otherProps="..."', '{...otherProps}')
          }
        )
      };

      ${uppercamelcase(id)}.propTypes = {
        color: PropTypes.string,
        size: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ]),
      }

      ${uppercamelcase(id)}.defaultProps = {
        color: 'currentColor',
        size: '24',
      }

      export default ${uppercamelcase(id)}
    `;

    const component = prettier.format(element, {
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      parser: 'flow',
    });

    fs.writeFileSync(location, component, 'utf-8');

    const exportString = `export ${uppercamelcase(id)} from './icons/${id}';\r\n`;
    fs.appendFileSync(path.join(rootDir, 'src', 'index.js'), exportString, 'utf-8');
  });
});
