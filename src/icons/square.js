import React from 'react';
import PropTypes from 'prop-types';

const Square = props => {
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
  );
};

Square.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Square.defaultProps = {
  children: null,
  color: 'currentColor',
  size: '24',
};

export default Square;
