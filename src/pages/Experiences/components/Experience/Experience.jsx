import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


import "../../style.scoped.sass";

function Experience(props) {
    const {
        company,
        current,
        img,
    } = props;

    return <div className="experience">
        <div className="experience-company">
            <img src={img.src} alt={img.alt} />
        </div>

        <a
            className="experience-link"
            href={company.href}
            target="_blank"
        >
            <FontAwesomeIcon
                className="experience-link__icon"
                icon={faGlobe}
            />

            {company.text}
        </a>
    </div>
}

export default Experience;