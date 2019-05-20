import React from 'react';
import PropTypes from 'prop-types';

const MousePointer = props => {
    const { color, size, ...otherProps } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            {...otherProps}
        >
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
            <path d="M13 13l6 6"></path>
        </svg>
    );
};

MousePointer.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MousePointer.defaultProps = {
    color: 'currentColor',
    size: '24',
};

export default MousePointer;
