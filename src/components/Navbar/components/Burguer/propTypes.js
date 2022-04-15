import PropTypes from 'prop-types';

const propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
};

const defaultProps = {
    open: false,
    onClick: () => { },
};

export {
    defaultProps,
    propTypes,
};