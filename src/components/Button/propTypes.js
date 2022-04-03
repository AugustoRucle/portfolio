import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
};

const defaultProps = {
    className: '',
    label: '',
    icon: '',
};

export {
    defaultProps,
    propTypes,
};