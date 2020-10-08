import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Path,
  Polyline,
} from 'svgs';

const CornerLeftUp = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <Svg
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
      <Polyline points="14 9 9 4 4 9" />
      <Path d="M20 20h-7a4 4 0 0 1-4-4V4" />
    </Svg>
  );
});

CornerLeftUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CornerLeftUp.displayName = 'CornerLeftUp';

export default CornerLeftUp;
