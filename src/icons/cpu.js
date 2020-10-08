import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Line,
  Rect,
} from 'svgs';

const Cpu = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <Rect x="9" y="9" width="6" height="6" />
      <Line x1="9" y1="1" x2="9" y2="4" />
      <Line x1="15" y1="1" x2="15" y2="4" />
      <Line x1="9" y1="20" x2="9" y2="23" />
      <Line x1="15" y1="20" x2="15" y2="23" />
      <Line x1="20" y1="9" x2="23" y2="9" />
      <Line x1="20" y1="14" x2="23" y2="14" />
      <Line x1="1" y1="9" x2="4" y2="9" />
      <Line x1="1" y1="14" x2="4" y2="14" />
    </Svg>
  );
});

Cpu.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cpu.displayName = 'Cpu';

export default Cpu;
