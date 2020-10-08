import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Circle,
  Line,
} from 'svgs';

const LifeBuoy = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Circle cx="12" cy="12" r="4" />
      <Line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <Line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <Line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      <Line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
      <Line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
    </Svg>
  );
});

LifeBuoy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LifeBuoy.displayName = 'LifeBuoy';

export default LifeBuoy;
