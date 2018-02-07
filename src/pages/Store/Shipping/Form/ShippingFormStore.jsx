import { Component } from 'react';

export class ShippingFormStore extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		address: '',
		address2: '',
		city: '',
		state: '',
		zipCode: '',
		error: ''
	};

	render() {
		return this.props.render({
			...this.state,
			handleFirstNameChange: this._handleFirstNameChange,
			handleLastNameChange: this._handleLastNameChange,
			handleEmailChange: this._handleEmailChange,
			handleAddressChange: this._handleAddressChange,
			handleAddress2Change: this._handleAddress2Change,
			handleCityChange: this._handleCityChange,
			handleStateChange: this._handleStateChange,
			handleZipCodeChange: this._handleZipCodeChange,
			handleErrorChange: this._handleErrorChange
		});
	}
	_handleFirstNameChange = letter => {
		this.setState({
			firstName: letter
		});
	};
	_handleLastNameChange = letter => {
		this.setState({
			lastName: letter
		});
	};
	_handleEmailChange = letter => {
		this.setState({
			lastName: letter
		});
	};
	_handleAddressChange = letter => {
		this.setState({
			address: letter
		});
	};
	_handleAddress2Change = letter => {
		this.setState({
			address2: letter
		});
	};
	_handleCityChange = letter => {
		this.setState({
			city: letter
		});
	};
	_handleStateChange = state => {
		this.setState({
			state: state
		});
	};
	_handleZipCodeChange = number => {
		this.setState({
			zipCode: number
		});
	};
}
