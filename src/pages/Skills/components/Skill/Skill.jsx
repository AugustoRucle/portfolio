import React from 'react';
import { Progress } from 'antd';

import { generateComponentKey } from '../../../../utils/ functions';

import './style.scoped.sass';

const COMPONENT_KEY = generateComponentKey();

function Skill(props) {
    const {
        title,
        skillsTypes,
        progress,
        image,
    } = props;

    return <div className="skill">
        <div className="skill-img">
            <img src={image.src} alt={image.alt} />
        </div>

        <div className="skill-content">
            <h6 className="skill-content__title">
                {title}
            </h6>

            <div className="skill-types">
                {skillsTypes.map((type, indice) => (
                    <span
                        className="skill-types__item"
                        key={`${COMPONENT_KEY}_${indice}`}
                    >
                        {type}
                    </span>
                ))}
            </div>

            <Progress width={200} percent={progress} />
        </div>
    </div>
}

export default Skill;