/**
 * Check if value is function.
 * 
 * @param {*} value
 * @return {boolean}
 */
const isFunction = (value) => {
    return value && typeof value === 'function';
}

/**
 * Get slice a array in chunks
 * 
 * @param {array} array 
 * @param {number} chunkSize 
 * @returns 
 */
const sliceIntoChunks = (array, chunkSize) => {
    const chunks = [];

    if (chunkSize === 0) {
        return [array];
    }

    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        chunks.push(chunk);
    }

    return chunks;
}

/**
 * Generate componente key
 * 
 * @param {string} key
 * @return {string}
 */
const generateComponentKey = (key) => {
    return `${generateRandomId()}${key ? '__' + key : ''}`;
}

/**
 * Generate random id.
 * 
 * @return {string}
 */
const generateRandomId = () => {
    return `${generateRandomAlphanumeric()}_${generateRandomAlphanumeric()}_${Date.now()}`;
}

/**
 * Generate random alphanumeric.
 * 
 * @return {string}
 */
const generateRandomAlphanumeric = (size = 5) => {
    let zeros = size > 1
        ? "0".repeat(size - 1)
        : "";

    return Math.floor((1 + Math.random()) * `0x1${zeros}`).toString(16);
}

/**
 * Generate a random number
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
const getRandomArbitrary = (min, max) => {
    return Math.abs(Math.ceil(Math.random() * (max - min) + min));
}



/**
 * Check if value is object.
 * 
 * @param {*} value
 * @return {boolean}
 */
const isObject = (value) => {
    return value && typeof value === 'object';
}

/**
 * Check if object is empty.
 * 
 * @param {*} value
 * @return {boolean}
 */
const isEmptyObject = (value) => {
    return !isObject(value) || Object.keys(value).length === 0;
}

export {
    generateComponentKey,
    getRandomArbitrary,
    generateRandomId,
    sliceIntoChunks,
    isEmptyObject,
    isFunction,
    isObject,
}