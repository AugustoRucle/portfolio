import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    onClick: PropTypes.func,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    className: '',
    checked: false,
    onClick: () => { },
    width: 100,
};

export {
    defaultProps,
    propTypes,
};