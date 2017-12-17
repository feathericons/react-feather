import React from 'react';
import PropTypes from 'prop-types';

const ZapOff = props => {
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
      <polyline points="12.41 6.75 13 2 10.57 4.92" />
      <polyline points="18.57 12.91 21 10 15.66 10" />
      <polyline points="8 8 3 14 12 14 11 22 16 16" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
};

ZapOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ZapOff.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default ZapOff;
