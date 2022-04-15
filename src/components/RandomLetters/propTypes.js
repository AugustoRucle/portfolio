import PropTypes from 'prop-types';

const propTypes = {
    amountRandomLetter: PropTypes.number,
    durationAnimation: PropTypes.number,
    durationByLetter: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.string,
};

const defaultProps = {
    durationAnimation: 100,
    amountRandomLetter: 20,
    durationByLetter: 50,
    color: "white",
    text: '',
};

export {
    defaultProps,
    propTypes,
};