import PropTypes from 'prop-types';
import { BasketProvider } from './BasketProvider';

export const ConnectedBasket = (props, context) => {
	return props.render(context[BasketProvider.contextName]);
};

ConnectedBasket.contextTypes = {
	[BasketProvider.contextName]: PropTypes.object.isRequired
};
