import { Component } from 'react';

export class OrderFormStore extends Component {
	state = {
		email: '',
		error: '',
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
		}
	};

	render() {
		const { email, error, shipping, billing } = this.state;
		console.log(this.state);
		return this.props.render({
			email,
			shipping,
			billing,
			error,
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
				...this.state.billing,
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
