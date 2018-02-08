import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { FirstName } from './Form/ShippingComponents/FirstName';
import { LastName } from './Form/ShippingComponents/LastName';
import { Email } from './Form/ShippingComponents/Email';
import { Address } from './Form/ShippingComponents/Address';
import { Address2 } from './Form/ShippingComponents/Address2';
import { City } from './Form/ShippingComponents/City';
import { State } from './Form/ShippingComponents/State';
import { ZipCode } from './Form/ShippingComponents/ZipCode';

export class ShippingContainer extends Component {
	render() {
		return (
			<Container>
				<ViewArea>
					<FormArea>
						<Header>Contact</Header>
						<Email />
						<Header>Shipping</Header>
						<FirstName />
						<LastName />
						<Address />
						<Address2 />
						<City />
						<State />
						<ZipCode />
						<Header>Billing</Header>
					</FormArea>
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

const FormArea = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-top: 20px;
	margin-bottom: 20px;
`;
