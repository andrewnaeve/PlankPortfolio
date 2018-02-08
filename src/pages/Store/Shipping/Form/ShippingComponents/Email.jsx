import React from 'react';
import { Field } from './Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const Email = props => (
	<FieldWrapper>
		<FieldName>Email</FieldName>
		<OrderFormConnector
			render={({ email, handleEmailChange }) => (
				<Field value={email} field="email" handleChange={handleEmailChange} />
			)}
		/>
	</FieldWrapper>
);
