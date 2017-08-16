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
      {...otherProps}
    >
      <path
        d="M5,12.55a11,11,0,0,1,14.08,0"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M1.42,9A16,16,0,0,1,22.58,9"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M8.53,16.11a6,6,0,0,1,6.95,0"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="12"
        y1="20"
        x2="12"
        y2="20"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
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
