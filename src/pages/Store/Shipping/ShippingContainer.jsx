import React, { Component } from 'react';
import styled from 'styled-components';
import { ShippingTitle } from './ShippingTitle';
import { FirstName } from './Form/FirstName';
import { LastName } from './Form/LastName';
import { Email } from './Form/Email';
import { Address } from './Form/Address';
export class ShippingContainer extends Component {
	render() {
		return (
			<Container>
				<ViewArea>
					<ShippingTitle />
					<FormArea>
						<Email />
						<FirstName />
						<LastName />
						<Address />
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
`;
