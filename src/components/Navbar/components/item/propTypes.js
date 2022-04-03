import PropTypes from 'prop-types';

const propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    current: PropTypes.bool,
};

const defaultProps = {
    icon: '',
    label: '',
    current: false,
};

export {
    defaultProps,
    propTypes,
};