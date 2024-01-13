import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useDefaultProps } from '../provider';

const ChevronUp = forwardRef(({ color: colorFromProp, size: sizeFromProp, ...rest }, ref) => {
  const { size: defaultSize, color: defaultColor } = useDefaultProps();
  const size = sizeFromProp || defaultSize;
  const color = colorFromProp || defaultColor;
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
      {...rest}
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
});

ChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronUp.displayName = 'ChevronUp';

export default ChevronUp;
