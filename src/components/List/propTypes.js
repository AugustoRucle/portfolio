import PropTypes from 'prop-types';

const propTypes = {
    labels: PropTypes.array,
    chunk: PropTypes.number,
};

const defaultProps = {
    labels: [],
    chunk: 0,
};

export {
    defaultProps,
    propTypes,
};