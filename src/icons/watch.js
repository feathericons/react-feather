import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Circle,
  Path,
  Polyline,
} from 'svgs';

const Watch = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Circle cx="12" cy="12" r="7" />
      <Polyline points="12 9 12 12 13.5 13.5" />
      <Path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
    </Svg>
  );
});

Watch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Watch.displayName = 'Watch';

export default Watch;
