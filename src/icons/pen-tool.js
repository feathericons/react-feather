import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Circle,
  Path,
} from 'svgs';

const PenTool = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Path d="M12 19l7-7 3 3-7 7-3-3z" />
      <Path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <Path d="M2 2l7.586 7.586" />
      <Circle cx="11" cy="11" r="2" />
    </Svg>
  );
});

PenTool.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PenTool.displayName = 'PenTool';

export default PenTool;
