import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Path,
  Polyline,
} from 'svgs';

const RefreshCcw = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Polyline points="1 4 1 10 7 10" />
      <Polyline points="23 20 23 14 17 14" />
      <Path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
    </Svg>
  );
});

RefreshCcw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RefreshCcw.displayName = 'RefreshCcw';

export default RefreshCcw;
