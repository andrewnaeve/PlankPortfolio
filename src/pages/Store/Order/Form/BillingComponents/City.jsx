import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const City = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ billing: { billingCity }, handleBillingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={billingCity}>
							City
						</FieldName>
					</Row>
					<Field
						value={billingCity}
						field="billingCity"
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
