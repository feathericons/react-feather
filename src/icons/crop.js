import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Path,
} from 'svgs';

const Crop = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
      <Path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
    </Svg>
  );
});

Crop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Crop.displayName = 'Crop';

export default Crop;
