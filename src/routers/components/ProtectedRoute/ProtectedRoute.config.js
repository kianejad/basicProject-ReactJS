import PropTypes from 'prop-types';

export const DEFAULT_PROPS = {
	hasLayout: false
};

export const PROP_TYPES = {
	hasLayout: PropTypes.bool,
	MyComponent: PropTypes.func.isRequired,
	test: PropTypes.string
};
