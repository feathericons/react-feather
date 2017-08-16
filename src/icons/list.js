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
      {...otherProps}
    >
      <line
        x1="8"
        y1="6"
        x2="21"
        y2="6"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="12"
        x2="21"
        y2="12"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="18"
        x2="21"
        y2="18"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="3"
        y1="6"
        x2="3"
        y2="6"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="3"
        y1="12"
        x2="3"
        y2="12"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="3"
        y1="18"
        x2="3"
        y2="18"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
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
