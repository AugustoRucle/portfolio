import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { Button as AntButton } from 'antd';

import "./style.scoped.sass";

function Button(props) {
    return <AntButton className="button">
        {props.label}
        <FontAwesomeIcon
            className="button-icon"
            icon={Icons[props.icon]}
        />
    </AntButton>
}

export default Button;