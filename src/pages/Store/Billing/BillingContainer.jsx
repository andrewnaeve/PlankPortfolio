import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import './sqpaymentform.css';
import { applicationId, locationId } from './secrets';
import { BillingTitle } from './BillingTitle';
export class BillingContainer extends Component {
	componentDidMount() {
		this.paymentForm = new window.SqPaymentForm({
			applicationId: applicationId,
			locationId: locationId,
			inputClass: 'sq-input',
			inputStyles: [
				{
					fontSize: '20px',
					lineHeight: '40px'
				}
			],

			applePay: {
				elementId: 'sq-apple-pay'
			},

			masterpass: false,

			cardNumber: {
				elementId: 'sq-card-number',
				placeholder: '•••• •••• •••• ••••'
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
			 * callback function: createPaymentRequest
			 * Triggered when: a digital wallet payment button is clicked.
			 */
				createPaymentRequest: function() {
					var paymentRequestJson;
					/* ADD CODE TO SET/CREATE paymentRequestJson */
					return paymentRequestJson;
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

				/*
			 * callback function: cardNonceResponseReceived
			 * Triggered when: SqPaymentForm completes a card nonce request
			 */
				cardNonceResponseReceived: function(errors, nonce, cardData) {
					if (errors) {
						console.log('Encountered errors:');
						errors.forEach(function(error) {
							console.log('  ' + error.message);
						});

						return;
					}

					alert('Nonce received: ' + nonce); /* FOR TESTING ONLY */

					document.getElementById('card-nonce').value = nonce;

					document.getElementById('nonce-form').submit();
				},

				/*
			 * callback function: unsupportedBrowserDetected
			 * Triggered when: the page loads and an unsupported browser is detected
			 */
				unsupportedBrowserDetected: function() {
					/* PROVIDE FEEDBACK TO SITE VISITORS */
				},

				/*
			 * callback function: inputEventReceived
			 * Triggered when: visitors interact with SqPaymentForm iframe elements.
			 */
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
					/* HANDLE AS DESIRED */
				}
			}
		});
		this.paymentForm.build();
	}
	render() {
		return (
			<Container>
				<Helmet>
					<title>Payment</title>
					<script type="text/javascript" src="https://js.squareup.com/v2/paymentform" />
				</Helmet>
				<ViewArea>
					<BillingTitle />
					<div id="sq-ccbox">
						<form
							id="nonce-form"
							noValidate
							action="path/to/payment/processing/page"
							method="post"
							style={{ display: 'flex', flex: '1', flexDirection: 'column' }}
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
									<button
										id="sq-creditcard"
										className="button-credit-card"
										onClick={() => console.log('reqeustnone')}
									>
										Pay with card
									</button>
								</ButtonWrap>
							</ButtonRow>
							<input type="hidden" id="card-nonce" name="nonce" />
						</form>
					</div>

					<div id="sq-walletbox">
						Pay with a Digital Wallet
						<div id="sq-apple-pay-label" className="wallet-not-enabled">
							Apple Pay for Web not enabled
						</div>
						<button id="sq-apple-pay" className="button-apple-pay" />
					</div>
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
`;
const Header = styled.div`
	display: flex;
	justify-content: flex-start;
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
