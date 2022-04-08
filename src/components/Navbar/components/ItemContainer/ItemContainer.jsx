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

    /**
     * On change
     * 
     * @param {object} event 
     * @returns {functio}
     */
    const _onClick = (event) => {
        if (!isFunction(onClick)) {
            return;
        }

        return onClick(event);
    }

    return to
        ? <Link
            className={className}
            to={to}
        >
            {children}
        </Link>
        : <div
            className={className}
            onClick={_onClick}
        >
            {children}
        </div>
}

export default ItemContainer;