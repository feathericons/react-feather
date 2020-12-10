import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const KontCog = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <g clipPath="url(#a)">
        <path d="M11 13.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5z" />
        <path d="M17.783 13.75a1.512 1.512 0 0 0 .303 1.668l.055.055a1.836 1.836 0 0 1-2 2.992 1.835 1.835 0 0 1-.594-.398l-.055-.055a1.512 1.512 0 0 0-1.669-.302 1.513 1.513 0 0 0-.916 1.384v.156a1.833 1.833 0 0 1-3.667 0v-.082a1.513 1.513 0 0 0-.99-1.385 1.513 1.513 0 0 0-1.668.303l-.055.055a1.833 1.833 0 1 1-2.594-2.594l.055-.055a1.512 1.512 0 0 0 .302-1.669 1.512 1.512 0 0 0-1.384-.916H2.75a1.833 1.833 0 1 1 0-3.667h.083a1.512 1.512 0 0 0 1.384-.99 1.512 1.512 0 0 0-.303-1.668l-.055-.055a1.834 1.834 0 1 1 2.594-2.595l.055.055a1.512 1.512 0 0 0 1.669.303h.073a1.513 1.513 0 0 0 .917-1.384V2.75a1.833 1.833 0 1 1 3.666 0v.082a1.512 1.512 0 0 0 .917 1.385 1.513 1.513 0 0 0 1.668-.303l.055-.055a1.832 1.832 0 0 1 2.992.595 1.834 1.834 0 0 1-.398 2l-.055.054a1.513 1.513 0 0 0-.302 1.669v.073a1.513 1.513 0 0 0 1.384.917h.156a1.833 1.833 0 0 1 0 3.666h-.082a1.513 1.513 0 0 0-1.385.917z" />
      </g>
      <defs>
        <clippath id="a">
          <rect width="22" height="22" />
        </clippath>
      </defs>
    </svg>
  );
});

KontCog.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

KontCog.displayName = 'KontCog';

export default KontCog;
