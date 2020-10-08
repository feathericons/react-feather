import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Line,
  Polyline,
} from 'svgs';

const Maximize2 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Polyline points="15 3 21 3 21 9" />
      <Polyline points="9 21 3 21 3 15" />
      <Line x1="21" y1="3" x2="14" y2="10" />
      <Line x1="3" y1="21" x2="10" y2="14" />
    </Svg>
  );
});

Maximize2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Maximize2.displayName = 'Maximize2';

export default Maximize2;
