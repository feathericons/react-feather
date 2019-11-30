import React from 'react';
import PropTypes from 'prop-types';
import { IconProps } from '../types';

const Rewind: React.FC<IconProps> = props => {
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
      <polygon points="11 19 2 12 11 5 11 19"></polygon>
      <polygon points="22 19 13 12 22 5 22 19"></polygon>
    </svg>
  );
};

Rewind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rewind.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Rewind;
