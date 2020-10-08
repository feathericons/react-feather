import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Polyline,
} from 'svgs';

const ChevronsUp = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Polyline points="17 11 12 6 7 11" />
      <Polyline points="17 18 12 13 7 18" />
    </Svg>
  );
});

ChevronsUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronsUp.displayName = 'ChevronsUp';

export default ChevronsUp;
