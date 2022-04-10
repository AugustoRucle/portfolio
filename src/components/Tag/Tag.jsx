import React from 'react';

import './style.scoped.sass'

function Tag(props) {
    const {
        children,
        className,
        checked,
        width,
        onClick
    } = props;

    

    return <span
        className={`custom-tag ${checked && 'custom-tag--checked'} ${className}`}
        style={{ width }}
        onClick={onClick}
    >
        {children}
    </span>
}

export default Tag;