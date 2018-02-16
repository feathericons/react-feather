import React from 'react';
import PropTypes from 'prop-types';

const Check = props => {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

Check.propTypes = {
  children: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Check.defaultProps = {
  children: null,
  color: 'currentColor',
  size: '24',
};

export default Check;
