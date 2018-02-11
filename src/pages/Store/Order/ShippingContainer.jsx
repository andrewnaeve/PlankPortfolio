import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Email } from './Form/Email';
import { FirstName as ShippingFirstName } from './Form/ShippingComponents/FirstName';
import { LastName as ShippingLastName } from './Form/ShippingComponents/LastName';
import { Address as ShippingAddress } from './Form/ShippingComponents/Address';
import { Address2 as ShippingAddress2 } from './Form/ShippingComponents/Address2';
import { City as ShippingCity } from './Form/ShippingComponents/City';
import { State as ShippingState } from './Form/ShippingComponents/State';
import { ZipCode as ShippingZipCode } from './Form/ShippingComponents/ZipCode';
import { FirstName as BillingFirstName } from './Form/ShippingComponents/FirstName';
import { LastName as BillingLastName } from './Form/ShippingComponents/LastName';
import { Address as BillingAddress } from './Form/ShippingComponents/Address';
import { Address2 as BillingAddress2 } from './Form/ShippingComponents/Address2';
import { City as BillingCity } from './Form/ShippingComponents/City';
import { State as BillingState } from './Form/ShippingComponents/State';
import { ZipCode as BillingZipCode } from './Form/ShippingComponents/ZipCode';
import { BillingSameAsShipping } from './Form/BillingSameAsShipping';
import { OrderFormConnector } from './Form/OrderFormConnector';

export class ShippingContainer extends Component {
	render() {
		return (
			<OrderFormConnector
				render={({ billingSameAsShipping }) => (
					<Container>
						<ViewArea>
							<FormArea>
								<Header>Contact</Header>
								<Email />
								<Header>Shipping</Header>
								<ShippingFirstName />
								<ShippingLastName />
								<ShippingAddress />
								<ShippingAddress2 />
								<ShippingCity />
								<ShippingState />
								<ShippingZipCode />
								<Row>
									<Header>Billing</Header>
									<Filler />
									<BillingSameAsShipping />
								</Row>
								{!billingSameAsShipping && (
									<BillingArea>
										<BillingFirstName />
										<BillingLastName />
										<BillingAddress />
										<BillingAddress2 />
										<BillingCity />
										<BillingState />
										<BillingZipCode />
									</BillingArea>
								)}
							</FormArea>
						</ViewArea>
					</Container>
				)}
			/>
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

const FormArea = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
`;

const Filler = styled.div`
	display: flex;
	flex: 1;
`;

const BillingArea = styled.div`
	margin-bottom: 20px;
`;
