import React from 'react';
import PropTypes from 'prop-types';

const CornerRightDown = props => {
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
      <polyline points="10 15 15 20 20 15" />
      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </svg>
  );
};

CornerRightDown.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerRightDown.defaultProps = {
  children: null,
  color: 'currentColor',
  size: '24',
};

export default CornerRightDown;
