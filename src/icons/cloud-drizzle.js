import React from 'react';
import PropTypes from 'prop-types';

const CloudDrizzle = props => {
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
        x1="8"
        y1="19"
        x2="8"
        y2="21"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <line
        x1="8"
        y1="13"
        x2="8"
        y2="15"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <line
        x1="16"
        y1="19"
        x2="16"
        y2="21"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <line
        x1="16"
        y1="13"
        x2="16"
        y2="15"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <line
        x1="12"
        y1="21"
        x2="12"
        y2="23"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <line
        x1="12"
        y1="15"
        x2="12"
        y2="17"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <path
        d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

CloudDrizzle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudDrizzle.defaultProps = {
  color: 'currentColor',
  size: '24',
  strokeWidth: '1',
};

export default CloudDrizzle;
