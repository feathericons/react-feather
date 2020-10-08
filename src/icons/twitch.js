import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Path,
} from 'svgs';

const Twitch = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </Svg>
  );
});

Twitch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Twitch.displayName = 'Twitch';

export default Twitch;
