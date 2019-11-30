import React from 'react';
import PropTypes from 'prop-types';
import { IconProps } from '../types';

const Speaker: React.FC<IconProps> = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <circle cx="12" cy="14" r="4"></circle>
      <line x1="12" y1="6" x2="12.01" y2="6"></line>
    </svg>
  );
};

Speaker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Speaker.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Speaker;
