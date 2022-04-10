import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    place: PropTypes.string,
    company: PropTypes.shape({
        to: PropTypes.string,
        text: PropTypes.string
    }),
    website: PropTypes.shape({
        to: PropTypes.string,
        text: PropTypes.string
    }),
    languages: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
    }),
    position: PropTypes.oneOf(['left', 'right']),
    current: PropTypes.bool,
    date: PropTypes.string,
};

const defaultProps = {
    title: '',
    description: '',
    place: '',
    company: {},
    website: {},
    languages: [],
    image: {},
    position: 'left',
    current: false,
    date: '',
};

export {
    defaultProps,
    propTypes,
};