/**
 * Get classname of tag
 * 
 * @param {string} position
 * @param {string} tag
 * @returns {string}
 */
const getPositionClassName = (position, tag) => {
    switch (position) {
        case 'top-bottom':
            return `tag-${tag} tag-${tag}--top-bottom`;

        case 'left-right':
            return `tag-${tag} tag-${tag}--left-right`;
    }
}

export {
    getPositionClassName,
}