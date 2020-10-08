import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Circle,
  Line,
} from 'svgs';

const Chrome = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Line x1="21.17" y1="8" x2="12" y2="8" />
      <Line x1="3.95" y1="6.06" x2="8.54" y2="14" />
      <Line x1="10.88" y1="21.94" x2="15.46" y2="14" />
    </Svg>
  );
});

Chrome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Chrome.displayName = 'Chrome';

export default Chrome;
