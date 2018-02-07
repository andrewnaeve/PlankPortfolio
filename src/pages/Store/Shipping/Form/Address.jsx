import React from 'react';
import { Field } from './Field';
import { ShippingFormConnector } from './ShippingFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';

export const Address = props => (
	<FieldWrapper>
		<FieldName>Address</FieldName>
		<ShippingFormConnector
			render={({ address, handleAddressChange }) => (
				<Field value={address} handleChange={handleAddressChange} />
			)}
		/>
	</FieldWrapper>
);
