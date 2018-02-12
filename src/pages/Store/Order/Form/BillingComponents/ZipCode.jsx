import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const ZipCode = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ billing: { billingZipCode }, handleBillingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={billingZipCode}>
							Zip Code
						</FieldName>
					</Row>
					<Field
						value={billingZipCode}
						field="billingZipCode"
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
