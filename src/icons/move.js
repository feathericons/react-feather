import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Line,
  Polyline,
} from 'svgs';

const Move = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Polyline points="5 9 2 12 5 15" />
      <Polyline points="9 5 12 2 15 5" />
      <Polyline points="15 19 12 22 9 19" />
      <Polyline points="19 9 22 12 19 15" />
      <Line x1="2" y1="12" x2="22" y2="12" />
      <Line x1="12" y1="2" x2="12" y2="22" />
    </Svg>
  );
});

Move.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Move.displayName = 'Move';

export default Move;
