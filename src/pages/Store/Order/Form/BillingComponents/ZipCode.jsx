import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';

export const ZipCode = props => (
	<FieldWrapper>
		<FieldName>Zip Code</FieldName>
		<OrderFormConnector
			render={({ billing: { zipCode }, handleBillingFieldChange }) => (
				<Field value={zipCode} field="zipCode" handleChange={handleBillingFieldChange} />
			)}
		/>
	</FieldWrapper>
);
