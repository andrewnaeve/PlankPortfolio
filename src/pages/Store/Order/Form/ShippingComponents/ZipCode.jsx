import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const ZipCode = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ shipping: { zipCode }, handleShippingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={zipCode}>
							Zip Code
						</FieldName>
					</Row>
					<Field
						value={zipCode}
						field="zipCode"
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
