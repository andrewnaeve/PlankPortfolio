import React from 'react';
import { Field } from './Field';
import { ShippingFormConnector } from '../ShippingFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const City = props => (
	<FieldWrapper>
		<FieldName>City</FieldName>
		<ShippingFormConnector
			render={({ city, handleShippingFieldChange }) => (
				<Field value={city} field="city" handleChange={handleShippingFieldChange} />
			)}
		/>
	</FieldWrapper>
);
