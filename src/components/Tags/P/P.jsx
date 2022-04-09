import React from 'react';

import './style.scoped.sass';

function PTag(props) {

    return <p
        className={`tag-p ${props.className}`}
        style={props.style}
    >
        {props.children}
    </p>
}

export default PTag