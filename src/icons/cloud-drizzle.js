import React from 'react';
import PropTypes from 'prop-types';

const CloudDrizzle = props => {
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
      <line x1="8" y1="19" x2="8" y2="21" />
      <line x1="8" y1="13" x2="8" y2="15" />
      <line x1="16" y1="19" x2="16" y2="21" />
      <line x1="16" y1="13" x2="16" y2="15" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="12" y1="15" x2="12" y2="17" />
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
    </svg>
  );
};

CloudDrizzle.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudDrizzle.defaultProps = {
  children: null,
  color: 'currentColor',
  size: '24',
};

export default CloudDrizzle;
