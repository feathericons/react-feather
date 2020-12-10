import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const KontHelp = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M11 20.167a9.167 9.167 0 1 0 0-18.333 9.167 9.167 0 0 0 0 18.333z" />
      <path d="M8.333 8.25a2.75 2.75 0 0 1 5.344.917c0 1.833-2.75 2.75-2.75 2.75" />
      <path d="M11 15.583h.01" />
    </svg>
  );
});

KontHelp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KontHelp.displayName = 'KontHelp';

export default KontHelp;
