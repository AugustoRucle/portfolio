import PropTypes from 'prop-types';
import {
    defaultProps as defaultPropsContainer,
    propTypes as propTypesContainer,
} from '../ItemContainer/propTypes';

const propTypes = {
    ...propTypesContainer,
    icon: PropTypes.string,
    label: PropTypes.string,
};

const defaultProps = {
    ...defaultPropsContainer,
    icon: '',
    label: '',
};

export {
    defaultProps,
    propTypes,
};