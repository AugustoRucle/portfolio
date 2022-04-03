import PropTypes, { oneOfType } from 'prop-types';

const propTypes = {
    hideAfter: PropTypes.oneOfType([
        PropTypes.null,
        PropTypes.number
    ]),
    
    startAfter: PropTypes.oneOfType([
        PropTypes.null,
        PropTypes.number
    ]),

    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

const defaultProps = {
    hideAfter: null,
    startAfter: null,
    width: "100%"
};

export {
    defaultProps,
    propTypes,
};