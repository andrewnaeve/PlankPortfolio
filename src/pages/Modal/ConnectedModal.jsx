import PropTypes from 'prop-types';
import { ModalProvider } from './ModalProvider';

export const ConnectedModal = (props, context) => {
	return props.render(context[ModalProvider.contextName]);
};

ConnectedModal.contextTypes = {
	[ModalProvider.contextName]: PropTypes.object.isRequired
};
