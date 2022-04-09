import React from 'react';

import './style.scoped.sass';

function BrTag(props) {
    const {
        parent,
        className,
    } = props;

    const getClassName = (parent) => {
        let classNameTemp = `tag-br ${className}`;

        switch (parent) {
            case 'h1':
                classNameTemp = `${classNameTemp} tag-br--parent-h1`;
                break;

            case 'h3':
                classNameTemp = `${classNameTemp} tag-br--parent-h3`;
                break;
        }

        return classNameTemp;
    }

    return <div className={getClassName(parent)}>
        {props.children}
    </div>
}

export default BrTag