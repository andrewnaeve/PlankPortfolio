import PropTypes from 'prop-types';
import { OrderFormProvider } from './OrderFormProvider';

export const OrderFormConnector = (props, context) => {
	return props.render(context[OrderFormProvider.contextName]);
};

OrderFormConnector.contextTypes = {
	[OrderFormProvider.contextName]: PropTypes.object.isRequired
};
