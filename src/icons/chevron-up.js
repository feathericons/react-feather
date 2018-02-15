import React from 'react';
import PropTypes from 'prop-types';

const ChevronUp = props => {
  const { children, color, size, ...otherProps } = props;
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
      {children}
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
};

ChevronUp.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChevronUp.defaultProps = {
  children: null,
  color: 'currentColor',
  size: '24',
};

export default ChevronUp;
