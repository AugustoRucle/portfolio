import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    onClick: PropTypes.func,
    width: PropTypes.number,
};

const defaultProps = {
    className: '',
    checked: false,
    onClick: () => {},
    width: 100,
};

export {
    defaultProps,
    propTypes,
};