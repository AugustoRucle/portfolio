import PropTypes from 'prop-types';

const propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    placement: PropTypes.string,
};

const defaultProps = {
    icon: '',
    title: '',
    placement: 'top',
};

export {
    defaultProps,
    propTypes,
};