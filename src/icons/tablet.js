import React from 'react';
import PropTypes from 'prop-types';

const Tablet = props => {
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
    >
      <rect
        x="4"
        y="2"
        width="16"
        height="20"
        rx="2"
        ry="2"
        transform="rotate(180 12 12)"
      />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  );
};

Tablet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tablet.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Tablet;
