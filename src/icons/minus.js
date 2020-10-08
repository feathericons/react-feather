import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Line,
} from 'svgs';

const Minus = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Line x1="5" y1="12" x2="19" y2="12" />
    </Svg>
  );
});

Minus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Minus.displayName = 'Minus';

export default Minus;
