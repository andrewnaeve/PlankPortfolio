import PropTypes from 'prop-types';
import { ShippingFormProvider } from './ShippingFormProvider';

export const ShippingFormConnector = (props, context) => {
	return props.render(context[ShippingFormProvider.contextName]);
};

ShippingFormConnector.contextTypes = {
	[ShippingFormProvider.contextName]: PropTypes.object.isRequired
};
