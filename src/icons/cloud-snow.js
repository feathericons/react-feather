import React from 'react';
import PropTypes from 'prop-types';

const CloudSnow = props => {
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
      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="8" y1="20" x2="8" y2="20" />
      <line x1="12" y1="18" x2="12" y2="18" />
      <line x1="12" y1="22" x2="12" y2="22" />
      <line x1="16" y1="16" x2="16" y2="16" />
      <line x1="16" y1="20" x2="16" y2="20" />
    </svg>
  );
};

CloudSnow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudSnow.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default CloudSnow;
