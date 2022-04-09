import React from 'react';

import { getPositionClassName } from '../functions';

import './style.scoped.sass';

function UlTag(props) {
    const {
        className,
        position,
        children,
        style,
    } = props;

    return <div
        className={`${getPositionClassName(position, 'ul')} ${className}`}
        style={style}
    >
        {children}
    </div>
}

export default UlTag