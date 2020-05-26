import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Line,
  Path,
} from 'svgs';

const CloudSnow = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
      <Line x1="8" y1="16" x2="8.01" y2="16" />
      <Line x1="8" y1="20" x2="8.01" y2="20" />
      <Line x1="12" y1="18" x2="12.01" y2="18" />
      <Line x1="12" y1="22" x2="12.01" y2="22" />
      <Line x1="16" y1="16" x2="16.01" y2="16" />
      <Line x1="16" y1="20" x2="16.01" y2="20" />
    </Svg>
  );
});

CloudSnow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudSnow.displayName = 'CloudSnow';

export default CloudSnow;
