import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCart = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <circle
        cx="8"
        cy="21"
        r="2"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle
        cx="20"
        cy="21"
        r="2"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5.67,6H23l-1.68,8.39a2,2,0,0,1-2,1.61H8.75a2,2,0,0,1-2-1.74L5.23,2.74A2,2,0,0,0,3.25,1H1"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

ShoppingCart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShoppingCart.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ShoppingCart;
