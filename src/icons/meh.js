import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Meh = forwardRef((props, ref) => {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="8" y1="15" x2="16" y2="15" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
});

Meh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Meh.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Meh;
