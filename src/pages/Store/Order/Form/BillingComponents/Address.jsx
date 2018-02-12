import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const Address = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ billing: { billingAddress }, handleBillingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={billingAddress}>
							Address
						</FieldName>
					</Row>
					<Field
						value={billingAddress}
						field="billingAddress"
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
