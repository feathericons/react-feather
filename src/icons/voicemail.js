import React from 'react';
import PropTypes from 'prop-types';

const Voicemail = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <circle
        cx="5.5"
        cy="11.5"
        r="4.5"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="18.5"
        cy="11.5"
        r="4.5"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="5.5"
        y1="16"
        x2="18.5"
        y2="16"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};

Voicemail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Voicemail.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Voicemail;
