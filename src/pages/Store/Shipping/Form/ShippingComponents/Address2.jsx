import React from 'react';
import { Field } from './Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const Address2 = props => (
	<FieldWrapper>
		<FieldName>Address Line 2</FieldName>
		<OrderFormConnector
			render={({ shipping: { address2 }, handleShippingFieldChange }) => (
				<Field value={address2} field="address2" handleChange={handleShippingFieldChange} />
			)}
		/>
	</FieldWrapper>
);
