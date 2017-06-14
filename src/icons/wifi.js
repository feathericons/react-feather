import React from 'react';
import PropTypes from 'prop-types';

const Wifi = props => {
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
      <path d="M5 11.55a11 11 0 0 1 14.08 0M1.41 8a16 16 0 0 1 21.17 0M8.52 15.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="19" x2="12" y2="19" />
    </svg>
  );
};

Wifi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wifi.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Wifi;
