import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownRight = props => {
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
        x1="6"
        y1="6"
        x2="18"
        y2="18"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <polyline
        points="9 18 18 18 18 9"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ArrowDownRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowDownRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ArrowDownRight;
