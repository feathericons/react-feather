import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Line,
  Polygon,
  Polyline,
} from 'svgs';

const Codepen = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <Line x1="12" y1="22" x2="12" y2="15.5" />
      <Polyline points="22 8.5 12 15.5 2 8.5" />
      <Polyline points="2 15.5 12 8.5 22 15.5" />
      <Line x1="12" y1="2" x2="12" y2="8.5" />
    </Svg>
  );
});

Codepen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Codepen.displayName = 'Codepen';

export default Codepen;
