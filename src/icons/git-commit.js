import React from 'react';
import PropTypes from 'prop-types';

const GitCommit = props => {
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
      <circle cx="12" cy="12" r="4" />
      <line x1="1.05" y1="12" x2="7" y2="12" />
      <line x1="17.01" y1="12" x2="22.96" y2="12" />
    </svg>
  );
};

GitCommit.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GitCommit.defaultProps = {
  children: null,
  color: 'currentColor',
  size: '24',
};

export default GitCommit;
