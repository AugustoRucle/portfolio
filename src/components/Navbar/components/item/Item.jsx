import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import { Typography } from 'antd';

import '../../style.scoped.sass';

function NavbarItem(props) {
    const {
        label,
        icon,
        current,
    } = props;

    return <div className={`navbar-item ${current && 'navbar-item--current'}`}>
        <div className="navbar-item-icon">
            <FontAwesomeIcon
                className="navbar-item-icon__icon"
                icon={Icons[icon]}
            />
        </div>

        <Typography className="navbar-item__label">
            {label}
        </Typography>
    </div>
}

export default NavbarItem;