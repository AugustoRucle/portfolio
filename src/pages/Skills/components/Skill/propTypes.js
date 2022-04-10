import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string,
    skillsTypes: PropTypes.arrayOf(PropTypes.string),
    progress: PropTypes.number,
    image: PropTypes.object,
};

const defaultProps = {
    title: '',
    skillsTypes: [],
    progress: 0,
    image: {},
};

export {
    defaultProps,
    propTypes,
};