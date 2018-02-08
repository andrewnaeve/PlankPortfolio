import React from 'react';
import { Field } from './Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const Address = props => (
	<FieldWrapper>
		<FieldName>Address</FieldName>
		<OrderFormConnector
			render={({ shipping: { address }, handleShippingFieldChange }) => (
				<Field value={address} field="address" handleChange={handleShippingFieldChange} />
			)}
		/>
	</FieldWrapper>
);
