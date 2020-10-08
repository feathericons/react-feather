import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Circle,
  Line,
  Rect,
} from 'svgs';

const Speaker = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <Circle cx="12" cy="14" r="4" />
      <Line x1="12" y1="6" x2="12.01" y2="6" />
    </Svg>
  );
});

Speaker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Speaker.displayName = 'Speaker';

export default Speaker;
