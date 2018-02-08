import React from 'react';
import { Field } from './Field';
import { ShippingFormConnector } from '../ShippingFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';
import { SelectField } from './Select';
import { SelectStates } from './SelectStates';

export const State = props => (
	<FieldWrapper>
		<FieldName>State</FieldName>
		<ShippingFormConnector
			render={({ state, handleShippingFieldChange }) => (
				<SelectField value={state} field="state" handleChange={handleShippingFieldChange}>
					<SelectStates key={''} />
				</SelectField>
			)}
		/>
	</FieldWrapper>
);
