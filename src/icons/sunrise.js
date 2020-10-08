import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Line,
  Path,
  Polyline,
} from 'svgs';

const Sunrise = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Path d="M17 18a5 5 0 0 0-10 0" />
      <Line x1="12" y1="2" x2="12" y2="9" />
      <Line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
      <Line x1="1" y1="18" x2="3" y2="18" />
      <Line x1="21" y1="18" x2="23" y2="18" />
      <Line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
      <Line x1="23" y1="22" x2="1" y2="22" />
      <Polyline points="8 6 12 2 16 6" />
    </Svg>
  );
});

Sunrise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sunrise.displayName = 'Sunrise';

export default Sunrise;
