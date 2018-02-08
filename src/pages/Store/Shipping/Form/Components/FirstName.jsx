import React from 'react';
import { Field } from './Field';
import { ShippingFormConnector } from '../ShippingFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const FirstName = props => (
	<FieldWrapper>
		<FieldName>First Name</FieldName>
		<ShippingFormConnector
			render={({ firstName, handleShippingFieldChange }) => (
				<Field
					value={firstName}
					field="firstName"
					handleChange={handleShippingFieldChange}
				/>
			)}
		/>
	</FieldWrapper>
);
