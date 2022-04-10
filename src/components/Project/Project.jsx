import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendar,
    faBuilding,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';

import {
    generateComponentKey,
    isEmptyObject
} from '../../utils/ functions';

import './style.scoped.sass'

const COMPONENT_KEY = generateComponentKey();

function Project(props) {
    const {
        title,
        description,
        place,
        company,
        website,
        languages,
        image,
        position,
        current,
        date,
    } = props;

    return <div className={`project project-${position == 'right' ? 'right' : 'left'}`}>
        <div className="project-content">
            <div className="project-image">
                <img
                    className="project-image--img"
                    src={image.src}
                    alt={image.alt}
                />
            </div>

            <div className="project-meta-data">
                <h6 className="project-meta-data__title">
                    {title}
                    {current && (
                        <span className="project-meta-data__current">
                            - Actual
                        </span>
                    )}
                </h6>

                <div className="project-meta-data-time-place">

                    {date && (
                        <p className="project-time">
                            <FontAwesomeIcon
                                className="project--icon"
                                icon={faCalendar}
                            />

                            {date}
                        </p>
                    )}


                    {!isEmptyObject(company) && (
                        <a
                            className="project-company"
                            href={company.to}
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                className="project--icon"
                                icon={faBuilding}
                            />

                            {company.text}
                        </a>
                    )}

                    {place.length > 0 && (
                        <p className="project-place">
                            <FontAwesomeIcon
                                className="project--icon"
                                icon={faBuilding}
                            />

                            {place}
                        </p>
                    )}

                </div>

                <p className="project-meta-data__description">
                    {description}
                </p>

                <div className="project-languages">
                    {languages.map((language, indice) => (
                        <span
                            className="project-languages__text"
                            key={`${COMPONENT_KEY}_language_${indice}`}    
                        >
                            {language}
                        </span>
                    ))}
                </div>

                <a
                    className="project-website"
                    href={website.to}
                    target="_blank"
                >
                    <FontAwesomeIcon
                        className="project--icon"
                        icon={faGlobe}
                    />

                    {website.text}
                </a>
            </div>
        </div>
    </div>
}

export default Project;