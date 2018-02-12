import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const Address2 = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ billing: { billingAddress2 }, handleBillingFieldChange }) => (
				<div>
					<Row>
						<FieldName>Address Line 2</FieldName>
					</Row>
					<Field
						value={billingAddress2}
						field="billingAddress2"
						handleChange={handleBillingFieldChange}
					/>
				</div>
			)}
		/>
	</FieldWrapper>
);

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;
