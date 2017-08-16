import React from 'react';
import PropTypes from 'prop-types';

const WifiOff = props => {
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
        x1="1"
        y1="1"
        x2="23"
        y2="23"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M16.72,11.06A10.94,10.94,0,0,1,19,12.55"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M5,12.55a10.94,10.94,0,0,1,5.17-2.39"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M10.71,5.05A16,16,0,0,1,22.58,9"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M1.42,9a15.91,15.91,0,0,1,4.7-2.88"
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

WifiOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WifiOff.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default WifiOff;
