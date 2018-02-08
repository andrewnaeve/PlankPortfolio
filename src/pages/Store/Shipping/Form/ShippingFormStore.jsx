import { Component } from 'react';

export class ShippingFormStore extends Component {
	state = {
		email: '',
		shipping: {
			firstName: '',
			lastName: '',
			address: '',
			address2: '',
			city: '',
			state: '',
			zipCode: ''
		},
		billing: {
			firstName: '',
			lastName: '',
			address: '',
			address2: '',
			city: '',
			state: '',
			zipCode: ''
		},
		error: ''
	};

	render() {
		console.log(this.state.email, this.state.shipping);
		return this.props.render({
			...this.state,
			handleShippingFieldChange: this._handleShippingFieldChange,
			handleEmailChange: this._handleEmailChange
		});
	}

	_handleShippingFieldChange = (e, field) => {
		this.setState({
			shipping: {
				...this.state.shipping,
				[field]: e.target.value
			}
		});
	};

	_handleBillingFieldChange = (e, field) => {
		this.setState({
			billing: {
				[field]: e.target.value
			}
		});
	};

	_handleEmailChange = e => {
		this.setState({
			email: e.target.value
		});
	};

	_handleErrorChange = error => {
		this.setState({
			error: error
		});
	};
}
