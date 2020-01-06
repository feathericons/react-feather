import React from 'react';
import PropTypes from 'prop-types';

const Play = (props) => {
  const { color, size, strokeWidth, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
};

Play.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Play.defaultProps = {
  color: 'currentColor',
  size: '24',
  strokeWidth: '2',
};

export default Play;
