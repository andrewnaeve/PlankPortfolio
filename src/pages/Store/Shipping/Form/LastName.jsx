import React from 'react';
import { Field } from './Field';
import { ShippingFormConnector } from './ShippingFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const LastName = props => (
	<FieldWrapper>
		<FieldName>Last Name</FieldName>
		<ShippingFormConnector
			render={({ lastName, handleLastNameChange }) => (
				<Field value={lastName} handleChange={handleLastNameChange} />
			)}
		/>
	</FieldWrapper>
);
