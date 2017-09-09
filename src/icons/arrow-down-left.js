import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownLeft = props => {
  const { color, size, strokeWidth, ...otherProps } = props;
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
        y1="6"
        x2="6"
        y2="18"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <polyline
        points="15 18 6 18 6 9"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

ArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
  strokeWidth: '1',
};

export default ArrowDownLeft;
