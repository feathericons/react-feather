import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, {
  Circle,
  Line,
  Path,
} from 'svgs';

const GitPullRequest = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <Circle cx="18" cy="18" r="3" />
      <Circle cx="6" cy="6" r="3" />
      <Path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <Line x1="6" y1="9" x2="6" y2="21" />
    </Svg>
  );
});

GitPullRequest.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GitPullRequest.displayName = 'GitPullRequest';

export default GitPullRequest;
