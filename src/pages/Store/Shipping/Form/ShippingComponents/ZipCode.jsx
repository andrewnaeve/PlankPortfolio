import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';

export const ZipCode = props => (
	<FieldWrapper>
		<FieldName>Zip Code</FieldName>
		<OrderFormConnector
			render={({ shipping: { zipCode }, handleShippingFieldChange }) => (
				<Field value={zipCode} field="zipCode" handleChange={handleShippingFieldChange} />
			)}
		/>
	</FieldWrapper>
);
