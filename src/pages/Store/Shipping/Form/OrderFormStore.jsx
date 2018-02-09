import { Component } from 'react';

export class OrderFormStore extends Component {
	static defaultProps = {
		billingSameAsShipping: false
	};

	state = {
		email: '',
		error: '',
		billingSameAsShipping: false,
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
		const { email, error, shipping, billing, billingSameAsShipping } = this.state;
		console.log(this.state);
		return this.props.render({
			email,
			shipping,
			billing,
			error,
			billingSameAsShipping,
			handleBillingSameAsShippingChange: this._handleBillingSameAsShippingChange,
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

	_handleBillingSameAsShippingChange = e => {
		this.setState(({ billingSameAsShipping }) => ({
			billingSameAsShipping: !billingSameAsShipping
		}));
	};

	_handleErrorChange = error => {
		this.setState({
			error: error
		});
	};
}
