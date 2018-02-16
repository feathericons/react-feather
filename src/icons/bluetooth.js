import React from 'react';
import PropTypes from 'prop-types';

const Bluetooth = props => {
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
      <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5" />
    </svg>
  );
};

Bluetooth.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bluetooth.defaultProps = {
  children: null,
  color: 'currentColor',
  size: '24',
};

export default Bluetooth;
