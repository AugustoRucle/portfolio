import React from 'react';

import { Link } from "react-router-dom";

import { isFunction } from '../../../../utils/ functions';

import '../../style.scoped.sass';

function ItemContainer(props) {
    const {
        onClick,
        children,
        current,
        to,
    } = props;

    const className = `navbar-item ${current && 'navbar-item--current'}`;

    return to
        ? <Link
            className={className}
            onClick={onClick}
            to={to}
        >
            {children}
        </Link>
        : <div
            className={className}
            onClick={onClick}
        >
            {children}
        </div>
}

export default ItemContainer;