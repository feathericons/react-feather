import React from 'react';
import PropTypes from 'prop-types';

const Edit3 = props => {
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
      <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
      <line x1="3" y1="22" x2="21" y2="22" />
    </svg>
  );
};

Edit3.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Edit3.defaultProps = {
  children: null,
  color: 'currentColor',
  size: '24',
};

export default Edit3;
