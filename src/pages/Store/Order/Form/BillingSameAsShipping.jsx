import React from 'react';
import styled from 'styled-components';
import { OrderFormConnector } from './OrderFormConnector';

export const BillingSameAsShipping = props => (
	<OrderFormConnector
		render={({ billingSameAsShipping, handleBillingSameAsShippingChange }) => (
			<Row>
				<Text>Billing same as shipping?</Text>
				<Input
					onChange={handleBillingSameAsShippingChange}
					type="checkbox"
					checked={billingSameAsShipping}
				/>
			</Row>
		)}
	/>
);

const Input = styled.input`
	transform: scale(1.9);
	align-self: flex-end;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

const Text = styled.div`
	display: flex;
	font-family: 'Abel';
	font-size: 1.3rem;
	align-self: flex-end;
	margin-right: 12px;
`;
