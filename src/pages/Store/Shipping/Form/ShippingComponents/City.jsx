import React from 'react';
import { Field } from './Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const City = props => (
	<FieldWrapper>
		<FieldName>City</FieldName>
		<OrderFormConnector
			render={({ shipping: { city }, handleShippingFieldChange }) => (
				<Field value={city} field="city" handleChange={handleShippingFieldChange} />
			)}
		/>
	</FieldWrapper>
);
