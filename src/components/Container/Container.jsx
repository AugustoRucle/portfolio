import React from 'react';

import './style.scoped.sass'

function Container(props) {
    return <div className="customer-container">
        {props.children}
    </div>
}

export default Container;