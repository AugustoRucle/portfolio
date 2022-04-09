import React from 'react';

import './style.scoped.sass'

function Adventure(props) {
    const {
        description,
        showInfo,
        title,
        alt,
        src,
        onMouseEnter,
        onMouseLeave,
    } = props;

    return <div
        className="event-image"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <img
            className="event-image__image"
            src={src}
            alt={alt}
        />

        <div className={`event-image-content ${showInfo && 'event-image-content--show'}`}>
            <p className="event-image-content__title">
                {title}
            </p>
            <p className="event-image-content__description">
                {description}
            </p>
        </div>
    </div>
}

export default Adventure