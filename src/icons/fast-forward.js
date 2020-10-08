import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Polygon,
} from 'svgs';

const FastForward = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Polygon points="13 19 22 12 13 5 13 19" />
      <Polygon points="2 19 11 12 2 5 2 19" />
    </Svg>
  );
});

FastForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FastForward.displayName = 'FastForward';

export default FastForward;
