import React, { Component } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import './sqpaymentform.css';
import { applicationId, locationId } from './secrets';
import { Header } from '../Header';
import { LoadingMask } from '../../Common/LoadingMask';
import { OrderFormConnector } from '../Order/Form/OrderFormConnector';
import { paymentRequest } from './billingHelpers';

export const BillingContainer = () => (
	<OrderFormConnector
		render={({ billing, shipping, email }) => (
			<BillingContainerWithProps billing={billing} shipping={shipping} email={email} />
		)}
	/>
);

export class BillingContainerWithProps extends Component {
	constructor() {
		super();
		this.state = {
			scriptLoaded: false,
			paymentFormLoaded: false
		};
	}

	componentWillMount() {
		this.newScript().then(() => this.scriptLoaded());
	}
	componentWillUnmount() {
		this.paymentForm.destroy();
	}
	scriptLoaded() {
		this.setState({ scriptLoaded: true });
	}
	paymentFormLoaded = () => {
		this.setState({ paymentFormLoaded: true });
	};

	newScript() {
		return new Promise(function(resolve, reject) {
			var script = document.createElement('script');
			script.src = 'https://js.squareup.com/v2/paymentform';
			script.addEventListener('load', function() {
				resolve();
			});
			script.addEventListener('error', function(e) {
				reject(e);
			});
			document.body.appendChild(script);
		});
	}

	componentDidUpdate(prevProps, prevState) {
		const { scriptLoaded } = this.state;
		if (scriptLoaded && scriptLoaded !== prevState.scriptLoaded) {
			this.initForm();
		}
	}

	initForm = () => {
		const that = this;
		const { zipCode } = this.props;

		this.paymentForm = new window.SqPaymentForm({
			applicationId: applicationId,
			locationId: locationId,
			inputClass: 'sq-input',
			inputStyles: [
				{
					fontSize: '25px',
					lineHeight: '40px'
				}
			],
			applePay: false,
			masterpass: false,
			cardNumber: {
				elementId: 'sq-card-number',
				placeholder: '**** **** **** ****'
			},
			cvv: {
				elementId: 'sq-cvv',
				placeholder: 'CVV'
			},
			expirationDate: {
				elementId: 'sq-expiration-date',
				placeholder: 'MM/YY'
			},
			postalCode: {
				elementId: 'sq-postal-code'
			},

			callbacks: {
				/*
			 * callback function: methodsSupported
			 * Triggered when: the page is loaded.
			 */
				methodsSupported: function(methods) {
					var applePayBtn = document.getElementById('sq-apple-pay');
					var applePayLabel = document.getElementById('sq-apple-pay-label');

					if (methods.applePay === true) {
						applePayBtn.style.display = 'inline-block';
						applePayLabel.style.display = 'none';
					}
				},
				/*
			 * callback function: validateShippingContact
			 * Triggered when: a shipping address is selected/changed in a digital
			 *                 wallet UI that supports address selection.
			 */
				validateShippingContact: function(contact) {
					var validationErrorObj;
					/* ADD CODE TO SET validationErrorObj IF ERRORS ARE FOUND */
					return validationErrorObj;
				},
				cardNonceResponseReceived: function(errors, nonce, cardData) {
					const { billing, shipping, email } = that.props;
					const customerInfo = {
						billing,
						shipping,
						email: email
					};
					if (errors) {
						let message = '';
						errors.forEach(function(error) {
							message = message + error.message + '\n';
						});
						swal({
							type: 'error',
							title: 'Something went wrong...',
							html: message.replace(/\n/g, '<br/>')
						});
						return;
					}
					console.log(nonce, customerInfo);
					paymentRequest(nonce, customerInfo);
					document.getElementById('card-nonce').value = nonce;
					// document.getElementById('nonce-form').submit();
				},
				unsupportedBrowserDetected: function() {
					/* PROVIDE FEEDBACK TO SITE VISITORS */
					alert('Browser not compatible');
				},
				inputEventReceived: function(inputEvent) {
					switch (inputEvent.eventType) {
						case 'focusClassAdded':
							/* HANDLE AS DESIRED */
							break;
						case 'focusClassRemoved':
							/* HANDLE AS DESIRED */
							break;
						case 'errorClassAdded':
							/* HANDLE AS DESIRED */
							break;
						case 'errorClassRemoved':
							/* HANDLE AS DESIRED */
							break;
						case 'cardBrandChanged':
							/* HANDLE AS DESIRED */
							break;
						case 'postalCodeChanged':
							/* HANDLE AS DESIRED */
							break;
					}
				},
				paymentFormLoaded: function() {
					const { billing: { billingZipCode } } = that.props;
					that.paymentForm.setPostalCode(billingZipCode);
					that.paymentFormLoaded();
				}
			}
		});
		this.paymentForm.build();
	};
	requestCardNonce = event => {
		event.preventDefault();
		this.paymentForm.requestCardNonce();
	};
	render() {
		const { paymentFormLoaded } = this.state;
		// action="path/to/payment/processing/page"
		return (
			<Container>
				<Helmet>
					<title>Payment</title>
				</Helmet>
				<ViewArea>
					<Header>Payment</Header>
					<LoadingMask loading={!paymentFormLoaded}>
						<div id="sq-ccbox">
							<form
								id="nonce-form"
								noValidate
								// method="post"
								onSubmit={this.requestCardNonce}
								style={{
									marginTop: '20px',
									display: 'flex',
									flex: '1',
									flexDirection: 'column'
								}}
							>
								<Row>
									<Title>Card Number:</Title>
									<Field id="sq-card-number" />
								</Row>
								<Row>
									<Title>CVV:</Title>
									<Field id="sq-cvv" />
								</Row>
								<Row>
									<Title>Expiration Date: </Title>
									<Field id="sq-expiration-date" />
								</Row>
								<Row>
									<Title>Postal Code:</Title>
									<Field id="sq-postal-code" />
								</Row>
								<ButtonRow>
									<Filler />
									<ButtonWrap>
										<button id="sq-creditcard" className="button-credit-card">
											Process Payment
										</button>
									</ButtonWrap>
								</ButtonRow>
								<input type="hidden" id="card-nonce" name="nonce" />
							</form>
						</div>
					</LoadingMask>
				</ViewArea>
			</Container>
		);
	}
}

const Container = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
`;

const ViewArea = styled.div`
	display: flex;
	width: 80%;
	height: 100%;
	flex-direction: column;
	margin-top: 20px;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	height: 40px;
	align-items: flex-end;
	justify-content: center;
	margin-bottom: 15px;
	flex-wrap: nowrap;
`;
const ButtonRow = styled.div`
	display: flex;
	flex-direction: row;
	height: 40px;
	align-items: flex-end;
	justify-content: center;
	margin-bottom: 10px;
	flex-wrap: nowrap;
	margin-top: 20px;
`;
const Filler = styled.div`
	display: flex;
	flex: 1;
`;
const Field = styled.div`
	display: flex;
	flex: 2;
	flex-direction: row;
	height: 40px;
	line-height: 40px;
	align-items: flex-end;
`;

const Title = styled.div`
	display: flex;
	height: 40px;
	flex: 1;
	align-items: flex-end;
`;

const Button = styled.div`
	display: flex;
	justify-content: center;
`;

const ButtonWrap = styled.div`
	display: flex;
	flex: 2;
	justify-content: flex-end;
	align-items: flex-end;
`;
