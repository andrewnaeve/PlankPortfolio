import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const LastName = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ billing: { billingLastName }, handleBillingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={billingLastName}>
							Last Name
						</FieldName>
					</Row>
					<Field
						value={billingLastName}
						field="billingLastName"
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
