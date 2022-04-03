import React from 'react';

import { Tooltip } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import "./style.scoped.sass";

const Icons = {
    faLinkedin,
    faGithub,
    faCode,
};

function Social(props) {
    return <Tooltip
        overlayClassName="social-tooltip"
        placement={props.placement}
        title={props.title}
    >
        <FontAwesomeIcon
            className="social"
            icon={Icons[props.icon]}
        />
    </Tooltip>

}

export default Social