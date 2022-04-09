import PropTypes from 'prop-types';

const propTypes = {
    description: PropTypes.string,
    showInfo: PropTypes.bool,
    title: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

const defaultProps = {
    description: '',
    showInfo: false,
    title: '',
    src: '',
    alt: '',
    onMouseEnter: () => {},
    onMouseLeave: () => {},
};

export {
    defaultProps,
    propTypes,
};