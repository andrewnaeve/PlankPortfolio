import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const City = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ shipping: { city }, handleShippingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={city}>
							City
						</FieldName>
					</Row>
					<Field value={city} field="city" handleChange={handleShippingFieldChange} />
				</div>
			)}
		/>
	</FieldWrapper>
);

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;
