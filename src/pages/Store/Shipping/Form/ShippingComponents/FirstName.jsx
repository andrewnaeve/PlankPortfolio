import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';

export const FirstName = props => (
	<FieldWrapper>
		<FieldName>First Name</FieldName>
		<OrderFormConnector
			render={({ shipping: { firstName }, handleShippingFieldChange }) => (
				<Field
					value={firstName}
					field="firstName"
					handleChange={handleShippingFieldChange}
				/>
			)}
		/>
	</FieldWrapper>
);
