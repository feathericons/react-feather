import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpLeft = props => {
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
      <line x1="17" y1="17" x2="7" y2="7" />
      <polyline points="7 17 7 7 17 7" />
    </svg>
  );
};

ArrowUpLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ArrowUpLeft;
