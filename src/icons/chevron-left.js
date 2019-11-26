import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronLeft = forwardRef((props, ref) => {
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
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
});

ChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ChevronLeft;
