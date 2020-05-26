import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Line,
} from 'svgs';

const AlignLeft = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Line x1="17" y1="10" x2="3" y2="10" />
      <Line x1="21" y1="6" x2="3" y2="6" />
      <Line x1="21" y1="14" x2="3" y2="14" />
      <Line x1="17" y1="18" x2="3" y2="18" />
    </Svg>
  );
});

AlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlignLeft.displayName = 'AlignLeft';

export default AlignLeft;
