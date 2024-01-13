import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useDefaultProps } from '../provider';

const Navigation = forwardRef(({ color: colorFromProp, size: sizeFromProp, ...rest }, ref) => {
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
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
});

Navigation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Navigation.displayName = 'Navigation';

export default Navigation;
