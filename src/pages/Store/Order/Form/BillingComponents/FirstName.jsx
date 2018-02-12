import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const FirstName = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ billing: { billingFirstName }, handleBillingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={billingFirstName}>
							First Name
						</FieldName>
					</Row>
					<Field
						value={billingFirstName}
						field="billingFirstName"
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
