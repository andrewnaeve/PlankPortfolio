import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';

export const Address = props => (
	<FieldWrapper>
		<FieldName>Address</FieldName>
		<OrderFormConnector
			render={({ billing: { address }, handleBillingFieldChange }) => (
				<Field value={address} field="address" handleChange={handleBillingFieldChange} />
			)}
		/>
	</FieldWrapper>
);
