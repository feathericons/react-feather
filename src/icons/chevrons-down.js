import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Polyline,
} from 'svgs';

const ChevronsDown = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Polyline points="7 13 12 18 17 13" />
      <Polyline points="7 6 12 11 17 6" />
    </Svg>
  );
});

ChevronsDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronsDown.displayName = 'ChevronsDown';

export default ChevronsDown;
