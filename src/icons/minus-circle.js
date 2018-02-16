import React from 'react';
import PropTypes from 'prop-types';

const MinusCircle = props => {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
};

MinusCircle.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MinusCircle.defaultProps = {
  children: null,
  color: 'currentColor',
  size: '24',
};

export default MinusCircle;
