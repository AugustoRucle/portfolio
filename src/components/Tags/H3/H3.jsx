import React from 'react';

import './style.scoped.sass';

function H3Tag(props) {
    return <h3
        className={`tag-h3 ${props.className}`}
        style={props.style}
    >
        {props.children}
    </h3>
}

export default H3Tag