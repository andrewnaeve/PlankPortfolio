import { Component } from 'react';
import { validateEmail } from './validation';
export class OrderFormStore extends Component {
	static defaultProps = {
		billingSameAsShipping: false,
		emailIsValid: true
	};

	state = {
		email: '',
		emailIsValid: true,
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
		const { email, shipping, billing, billingSameAsShipping, emailIsValid } = this.state;
		return this.props.render({
			email,
			shipping,
			billing,
			emailIsValid,
			billingSameAsShipping,
			handleEmailBlur: this._handleEmailBlur,
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

	_handleEmailBlur = event => {
		const email = event.target.value;
		const emailIsValid = validateEmail(email);
		if (!emailIsValid) {
			this.setState({
				emailIsValid: false
			});
		} else {
			this.setState({
				emailIsValid: true
			});
		}
	};
}
