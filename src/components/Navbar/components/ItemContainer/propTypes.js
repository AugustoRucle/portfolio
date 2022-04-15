import PropTypes from 'prop-types';

const propTypes = {
    current: PropTypes.bool,
    onClick: PropTypes.func,
    to: PropTypes.string,
};

const defaultProps = {
    current: false,
    onClick: () => { },
    to: null,
};

export {
    defaultProps,
    propTypes,
};