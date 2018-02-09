import React from 'react';
import { Field } from '../Field';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import { SelectField } from '../SelectField';
import { SelectStates } from '../SelectStates';

export const State = props => (
	<FieldWrapper>
		<FieldName>State</FieldName>
		<OrderFormConnector
			render={({ billing: { state }, handleBillingFieldChange }) => (
				<SelectField value={state} field="state" handleChange={handleBillingFieldChange}>
					<SelectStates key={''} />
				</SelectField>
			)}
		/>
	</FieldWrapper>
);
