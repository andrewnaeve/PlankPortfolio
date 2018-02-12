import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const Address2 = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ shipping: { address2 }, handleShippingFieldChange }) => (
				<div>
					<Row>
						<FieldName>Address Line 2</FieldName>
					</Row>
					<Field
						value={address2}
						field="address2"
						handleChange={handleShippingFieldChange}
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
