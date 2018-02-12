import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const FirstName = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ shipping: { firstName }, handleShippingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={firstName}>
							First Name
						</FieldName>
					</Row>
					<Field
						value={firstName}
						field="firstName"
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
