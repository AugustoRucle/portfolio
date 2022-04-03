import React from 'react';

import './style.scoped.sass';

function BrTag(props) {
    const {
        position,
        className,
    } = props;

    const getClassName = (position) => {
        let classNameTemp = `tag-br ${className}`;

        switch (position) {
            case 'top-bottom':
                classNameTemp = `${classNameTemp} tag-br--top-bottom`;
                break;

            case 'left-right':
                classNameTemp = `${classNameTemp} tag-br--left-right`;
                break;
        }

        return classNameTemp;
    }

    return <span className={getClassName(position)}>
        {props.children}
    </span>
}

export default BrTag