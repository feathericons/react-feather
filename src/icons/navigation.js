import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Polygon,
} from 'svgs';

const Navigation = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Polygon points="3 11 22 2 13 21 11 13 3 11" />
    </Svg>
  );
});

Navigation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Navigation.displayName = 'Navigation';

export default Navigation;
