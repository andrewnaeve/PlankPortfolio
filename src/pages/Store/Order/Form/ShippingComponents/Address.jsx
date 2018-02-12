import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const Address = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ shipping: { address }, handleShippingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={address}>
							Address
						</FieldName>
					</Row>
					<Field
						value={address}
						field="address"
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
