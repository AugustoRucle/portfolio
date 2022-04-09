import React, { useEffect, useState } from 'react';

import {
    generateComponentKey,
    sliceIntoChunks
} from '../../utils/ functions';

const COMPONENT_KEY = generateComponentKey();

import './style.scoped.sass';

function List(props) {
    const {
        labels,
        chunk,
    } = props;

    const [chunksLabels, setChunksLabels] = useState([]);

    useEffect(() => {
        setChunksLabels(
            sliceIntoChunks(labels, chunk)
        )
    }, []);


    return <div className="list">
        {chunksLabels.map((labels, indiceContent) => (
            <ul
                className={`list-content ${indiceContent !== (labels.length - 1) && 'list-content--space'}`}
                key={`${COMPONENT_KEY}_content_${indiceContent}`}
            >
                {labels.map((label, indiceItem) => (
                    <li
                        className="list-item"
                        key={`${COMPONENT_KEY}_item_${indiceItem}`}
                    >
                        {label}
                    </li>
                ))}
            </ul>
        ))}
    </div>
}

export default List;