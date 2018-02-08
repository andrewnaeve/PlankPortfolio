import React from 'react';
import { Field } from './Field';
import { ShippingFormConnector } from '../ShippingFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const Address2 = props => (
	<FieldWrapper>
		<FieldName>Address Line 2</FieldName>
		<ShippingFormConnector
			render={({ address2, handleShippingFieldChange }) => (
				<Field value={address2} field="address2" handleChange={handleShippingFieldChange} />
			)}
		/>
	</FieldWrapper>
);
