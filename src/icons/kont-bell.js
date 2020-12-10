import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const KontBell = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="M11.586 19.25a1.833 1.833 0 0 1-3.172 0m10.753-3.667H.833a2.75 2.75 0 0 0 2.75-2.75V8.25a6.417 6.417 0 1 1 12.834 0v4.583a2.75 2.75 0 0 0 2.75 2.75z" />
    </svg>
  );
});

KontBell.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KontBell.displayName = 'KontBell';

export default KontBell;
