import React from 'react';
import PropTypes from 'prop-types';

const BellOff = props => {
  const { children, color, size, ...otherProps } = props;
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
      {children}
      <path d="M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
};

BellOff.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BellOff.defaultProps = {
  children: null,
  color: 'currentColor',
  size: '24',
};

export default BellOff;
