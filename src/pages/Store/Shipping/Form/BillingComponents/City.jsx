import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';

export const City = props => (
	<FieldWrapper>
		<FieldName>City</FieldName>
		<OrderFormConnector
			render={({ billing: { city }, handleBillingFieldChange }) => (
				<Field value={city} field="city" handleChange={handleBillingFieldChange} />
			)}
		/>
	</FieldWrapper>
);
