import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CornerLeftDown = forwardRef((props, ref) => {
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
      ref={ref}
    >
      <polyline points="14 15 9 20 4 15" />
      <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
    </svg>
  );
});

CornerLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerLeftDown.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default CornerLeftDown;
