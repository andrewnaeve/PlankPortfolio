import React from 'react';
import { Field } from './Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const LastName = props => (
	<FieldWrapper>
		<FieldName>Last Name</FieldName>
		<OrderFormConnector
			render={({ shipping: { lastName }, handleShippingFieldChange }) => (
				<Field value={lastName} field="lastName" handleChange={handleShippingFieldChange} />
			)}
		/>
	</FieldWrapper>
);
