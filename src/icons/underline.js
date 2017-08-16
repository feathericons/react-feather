import React from 'react';
import PropTypes from 'prop-types';

const Underline = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <path
        d="M6,3v7a6,6,0,0,0,6,6h0a6,6,0,0,0,6-6V3"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <line
        x1="4"
        y1="21"
        x2="20"
        y2="21"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

Underline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Underline.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Underline;
