import React from 'react';

import { getPositionClassName } from '../functions';

import './style.scoped.sass';

function H3Tag(props) {
    const {
        position,
        children,
        style,
    } = props;

    return <div
        className={`${getPositionClassName(position, 'h3')}`}
        style={style}
    >
        {children}
    </div>
}

export default H3Tag