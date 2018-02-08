import React from 'react';
import { Field } from './Field';
import { ShippingFormConnector } from '../ShippingFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const ZipCode = props => (
	<FieldWrapper>
		<FieldName>Zip Code</FieldName>
		<ShippingFormConnector
			render={({ zipCode, handleShippingFieldChange }) => (
				<Field value={zipCode} field="zipCode" handleChange={handleShippingFieldChange} />
			)}
		/>
	</FieldWrapper>
);
