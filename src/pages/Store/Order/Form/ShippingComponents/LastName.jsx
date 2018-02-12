import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import styled from 'styled-components';
export const LastName = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ shipping: { lastName }, handleShippingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={lastName}>
							Last Name
						</FieldName>
					</Row>
					<Field
						value={lastName}
						field="lastName"
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
