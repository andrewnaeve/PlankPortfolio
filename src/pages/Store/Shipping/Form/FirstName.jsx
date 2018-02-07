import React from 'react';
import { Field } from './Field';
import { ShippingFormConnector } from './ShippingFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const FirstName = props => (
	<FieldWrapper>
		<FieldName>First Name</FieldName>
		<ShippingFormConnector
			render={({ firstName, handleFirstNameChange }) => (
				<Field value={firstName} handleChange={handleFirstNameChange} />
			)}
		/>
	</FieldWrapper>
);
