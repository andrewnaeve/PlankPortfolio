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
		formIsValid: false,
		submitted: false,
		checkingValidation: false,
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
			billingFirstName: '',
			billingLastName: '',
			billingAddress: '',
			billingAddress2: '',
			billingCity: '',
			billingState: '',
			billingZipCode: ''
		}
	};

	componentDidUpdate(prevProps, prevState) {
		const { checkingValidation } = this.state;
		if (checkingValidation && checkingValidation !== prevState.checkingValidation) {
			this._isFormValid();
		}
	}

	render() {
		const {
			email,
			shipping,
			billing,
			billingSameAsShipping,
			emailIsValid,
			formIsValid,
			submitted,
			checkingValidation
		} = this.state;

		return this.props.render({
			email,
			shipping,
			billing,
			emailIsValid,
			billingSameAsShipping,
			formIsValid,
			submitted,
			checkingValidation,
			resetFormConditions: this._resetFormConditions,
			validateForm: this._validateForm,
			handleEmailBlur: this._handleEmailBlur,
			handleBillingSameAsShippingChange: this._handleBillingSameAsShippingChange,
			handleShippingFieldChange: this._handleShippingFieldChange,
			handleBillingFieldChange: this._handleBillingFieldChange,
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

	_handleBillingSameAsShippingChange = e => {
		this.setState(({ billingSameAsShipping }) => ({
			billingSameAsShipping: !billingSameAsShipping
		}));
	};

	_validateForm = () => {
		this.setState({
			checkingValidation: true,
			submitted: true
		});
	};

	_isFormValid = () => {
		const { email, emailIsValid, billingSameAsShipping, shipping, billing } = this.state;
		if (email && emailIsValid) {
			if (billingSameAsShipping) {
				const result = this._checkIfFieldsAreEmpty({ ...shipping });
				this._setValidationResult(result);
			} else {
				const result = this._checkIfFieldsAreEmpty({ ...shipping, ...billing });
				this._setValidationResult(result);
			}
		} else {
			this._setValidationResult(false);
		}
	};

	_checkIfFieldsAreEmpty = fieldObject => {
		for (let key in fieldObject) {
			if (key === 'address2' || key === 'billingAddress2') {
				continue;
			}
			if (fieldObject[key] === '') {
				return false;
			}
		}
		return true;
	};

	_setValidationResult = result => {
		if (result) {
			this.setState({
				formIsValid: true,
				checkingValidation: false
			});
		} else {
			this.setState({
				formIsValid: false,
				checkingValidation: false
			});
		}
	};

	_resetFormConditions = () => {
		this.setState({
			formIsValid: false,
			submitted: false
		});
	};
}
