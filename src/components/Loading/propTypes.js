import PropTypes from 'prop-types';

const propTypes = {
    duration: PropTypes.number,
    onFinish: PropTypes.oneOfType([
        PropTypes.null,
        PropTypes.func
    ]),
};

const defaultProps = {
    duration: 1000,
    onFinish: null,
};

export {
    defaultProps,
    propTypes,
};