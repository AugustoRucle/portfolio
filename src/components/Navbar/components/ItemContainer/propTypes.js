import PropTypes from 'prop-types';

const propTypes = {
    current: PropTypes.bool,
    onClick: PropTypes.oneOfType([
        PropTypes.null,
        PropTypes.func
    ]),
    to: PropTypes.string,
};

const defaultProps = {
    current: false,
    onClick: null,
    to: null,
};

export {
    defaultProps,
    propTypes,
};