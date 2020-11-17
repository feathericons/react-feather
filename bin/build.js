/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path');
const fs = require('fs');
const format = require('prettier-eslint');
const upperCamelCase = require('uppercamelcase');
const featherIcons = require('feather-icons/dist/icons.json');

const rootDir = path.join(__dirname, '..');

const icons = Object.keys(featherIcons);

const dir = path.join(rootDir, 'src/icons');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const initialTypeDefinitions = `/// <reference types="react" />
import { FC, SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

export type Icon = FC<IconProps>;
`;

fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');
fs.writeFileSync(
  path.join(rootDir, 'src', 'index.d.ts'),
  initialTypeDefinitions,
  'utf-8',
);

const attrsToString = (attrs) => {
  return Object.keys(attrs).map((key) => {
    if (key === 'width' || key === 'height' || key === 'stroke') {
      return key + '={' + attrs[key] + '}';
    }
    if (key === 'rest') {
      return '{...rest}';
    }
    return key + '="' + attrs[key] + '"';
  }).join(' ');
};

icons.forEach((i) => {
  const location = path.join(rootDir, 'src/icons', `${i}.js`);
  const ComponentName = (i === 'github') ? 'GitHub' : upperCamelCase(i);
  const defaultAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'color',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    rest: '...rest',
  };

  const element = `
    import React, {forwardRef} from 'react';
    import PropTypes from 'prop-types';

    const ${ComponentName} = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
      return (
        <svg ref={ref} ${attrsToString(defaultAttrs)}>
          ${featherIcons[i]}
        </svg>
      )
    });

    ${ComponentName}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    }

    ${ComponentName}.displayName = '${ComponentName}'

    export default ${ComponentName}
  `;

  const component = format({
    text: element,
    eslintConfig: {
      extends: 'airbnb',
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: 'flow',
    },
  });

  fs.writeFileSync(location, component, 'utf-8');

  console.log('Successfully built', ComponentName);

  const exportString = `export { default as ${ComponentName} } from './icons/${i}';\r\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'index.js'),
    exportString,
    'utf-8',
  );

  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'index.d.ts'),
    exportTypeString,
    'utf-8',
  );
});
