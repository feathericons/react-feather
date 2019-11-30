import React from 'react';
import PropTypes from 'prop-types';
import { IconProps } from '../types';

const ArrowDownCircle: React.FC<IconProps> = props => {
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
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="8 12 12 16 16 12"></polyline>
      <line x1="12" y1="8" x2="12" y2="16"></line>
    </svg>
  );
};

ArrowDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ArrowDownCircle;
