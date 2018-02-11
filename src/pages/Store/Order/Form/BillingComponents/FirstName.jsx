import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';

export const FirstName = props => (
	<FieldWrapper>
		<FieldName>First Name</FieldName>
		<OrderFormConnector
			render={({ billing: { firstName }, handleBillingFieldChange }) => (
				<Field
					value={firstName}
					field="firstName"
					handleChange={handleBillingFieldChange}
				/>
			)}
		/>
	</FieldWrapper>
);
