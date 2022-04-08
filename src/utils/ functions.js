/**
 * Check if value is function.
 * 
 * @param {*} value
 * @return {boolean}
 */
const isFunction = (value) => {
    return value && typeof value === 'function';
}

export {
    isFunction,
}