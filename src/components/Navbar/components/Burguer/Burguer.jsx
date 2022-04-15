import React from 'react';

import './style.scoped.sass';

function Burguer(props) {
    return <div
        className={`navbar-burguer ${props.open && 'navbar-burguer--open'}`}
        onClick={props.onClick}
    >
        <div className="navbar-burguer--item" />
        <div className="navbar-burguer--item" />
        <div className="navbar-burguer--item" />
    </div>
}

export default Burguer;