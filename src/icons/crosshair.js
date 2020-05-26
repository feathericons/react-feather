import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Circle,
  Line,
} from 'svgs';

const Crosshair = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Circle cx="12" cy="12" r="10" />
      <Line x1="22" y1="12" x2="18" y2="12" />
      <Line x1="6" y1="12" x2="2" y2="12" />
      <Line x1="12" y1="6" x2="12" y2="2" />
      <Line x1="12" y1="22" x2="12" y2="18" />
    </Svg>
  );
});

Crosshair.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Crosshair.displayName = 'Crosshair';

export default Crosshair;
