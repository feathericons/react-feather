import React from 'react';
import PropTypes from 'prop-types';

const CheckCircle = props => {
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
      <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="23 3 12 14 9 11" />
    </svg>
  );
};

CheckCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CheckCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default CheckCircle;
