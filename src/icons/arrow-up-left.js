import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeft = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <line
        x1="18"
        y1="18"
        x2="6"
        y2="6"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <polyline
        points="15 6 6 6 6 15"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ArrowUpLeft;
