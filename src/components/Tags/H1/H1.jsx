import React from 'react';

import './style.scoped.sass';

function H1Tag(props) {
    return <h1
        className={`tag-h1 ${props.className}`}
        style={props.style}
    >
        {props.children}
    </h1>
}

export default H1Tag