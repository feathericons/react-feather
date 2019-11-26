import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Play = forwardRef((props, ref) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
      ref={ref}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
});

Play.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Play.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Play;
