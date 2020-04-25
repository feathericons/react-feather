import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MousePointer = (props, ref) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      ref={ref}
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
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="M13 13l6 6" />
    </svg>
  );
};

MousePointer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MousePointer.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default forwardRef(MousePointer);
