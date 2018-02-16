import React from 'react';
import PropTypes from 'prop-types';

const Edit2 = props => {
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
      <polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
    </svg>
  );
};

Edit2.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Edit2.defaultProps = {
  children: null,
  color: 'currentColor',
  size: '24',
};

export default Edit2;
