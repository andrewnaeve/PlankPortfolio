import React from 'react';
import { Field } from './Field';
import { ShippingFormConnector } from '../ShippingFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const Email = props => (
	<FieldWrapper>
		<FieldName>Email</FieldName>
		<ShippingFormConnector
			render={({ email, handleEmailChange }) => (
				<Field value={email} field="email" handleChange={handleEmailChange} />
			)}
		/>
	</FieldWrapper>
);
