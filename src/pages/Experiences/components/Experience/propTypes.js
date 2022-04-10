import PropTypes from 'prop-types';

const propTypes = {
    company: PropTypes.object,
    current: PropTypes.bool,
    img: PropTypes.object,
};

const defaultProps = {
    current: false,
    img: {
        src: '',
        alt: '',
    },
    company: {
        to: '',
        text: '',
    },
};

export {
    defaultProps,
    propTypes,
};