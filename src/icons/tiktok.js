import React,{forwardRef} from 'react';
import PropTypes from 'prop-types';

const Tiktok = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref)=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" 
    ref={ref}
    stroke={color}
    height={size} width={size}
    fill="none"
    viewBox="0 0 2859 3333" 
    shape-rendering="geometricPrecision" 
    text-rendering="geometricPrecision" 
    image-rendering="optimizeQuality" 
    fill-rule="evenodd" 
    clip-rule="evenodd"
    {...rest}
    >
    <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"/>
    </svg>
    );
});

Tiktok.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

Tiktok.displayName='Tiktok';
export default Tiktok;