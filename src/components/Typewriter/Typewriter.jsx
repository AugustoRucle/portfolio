import React, { useEffect, useState } from "react";

import "./styles.scoped.sass";

function TypeWriter(props) {
    const [hiddenPointer, setHidePointer] = useState(false);
    const [hiddeContent, setHideContent] = useState(true);

    useEffect(() => {
        if (props.startAfter === null) {
            setHideContent(false);
            hidePointer(props.hideAfter);
            return;
        }

        setTimeout(() => {
            setHideContent(false)
            hidePointer(props.hideAfter);
        }, props.startAfter);
    }, []);

    /**
     * Hiden pointer after a time
     * 
     * @param {number} after
     * @returns
     */
    const hidePointer = (after) => {
        if (after === null) {
            return;
        }

        setTimeout(() => {
            setHidePointer(true)
        }, after);
    }

    /**
     * Normalize text width
     * 
     * @param {number} width 
     * @returns {string}
     */
    const normalizeWidth = (width) => {
        return typeof width === "number"
            ? `${width}px`
            : width
    }

    return <div className="typewriter">
        {!hiddeContent && (
            <div
                className={`typewriter--content ${hiddenPointer && 'typewriter--stop'}`}
                style={{ width: normalizeWidth(props.width) }}
            >
                {props.children}
            </div>
        )}
    </div>
}

export default TypeWriter;