import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import Container from "../ItemContainer";
import { Typography } from 'antd';

import '../../style.scoped.sass';

function NavbarItem(props) {
    const {
        onClick,
        current,
        label,
        icon,
        to,
    } = props;

    return <Container
        current={current}
        to={to}
        onClick={onClick}
    >
        <div className="navbar-item-icon">
            <FontAwesomeIcon
                className="navbar-item-icon__icon"
                icon={Icons[icon]}
            />
        </div>

        <Typography className="navbar-item__label">
            {label}
        </Typography>
    </Container>
}

export default NavbarItem;