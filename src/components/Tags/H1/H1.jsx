import React from 'react';

import { getPositionClassName } from '../functions';

import './style.scoped.sass';

function H1Tag(props) {
    return <h1
        className={getPositionClassName(props.position, 'h1')}
        style={props.style}
    >
        {props.children}
    </h1>
}

export default H1Tag