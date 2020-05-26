import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Line,
  Polyline,
} from 'svgs';

const Shuffle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Polyline points="16 3 21 3 21 8" />
      <Line x1="4" y1="20" x2="21" y2="3" />
      <Polyline points="21 16 21 21 16 21" />
      <Line x1="15" y1="15" x2="21" y2="21" />
      <Line x1="4" y1="4" x2="9" y2="9" />
    </Svg>
  );
});

Shuffle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Shuffle.displayName = 'Shuffle';

export default Shuffle;
