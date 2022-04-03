import PropTypes from 'prop-types';

const propTypes = {
    position: PropTypes.oneOf(['top-bottom', 'left-right']),
    className: PropTypes.string,
    style: PropTypes.object,
};

const defaultProps = {
    position: 'top-bottom',
    className: '',
    style: {}
};

export {
    defaultProps,
    propTypes,
};