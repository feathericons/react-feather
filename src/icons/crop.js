import React from 'react';
import PropTypes from 'prop-types';

const Crop = props => {
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
      <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
      <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
    </svg>
  );
};

Crop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Crop.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Crop;
