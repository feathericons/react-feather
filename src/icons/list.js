import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
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
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3" y2="6" />
      <line x1="3" y1="12" x2="3" y2="12" />
      <line x1="3" y1="18" x2="3" y2="18" />
    </svg>
  );
};

List.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

List.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default List;
