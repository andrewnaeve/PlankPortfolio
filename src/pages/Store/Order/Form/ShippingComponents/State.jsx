import React from 'react';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import { SelectField } from '../SelectField';
import { SelectStates } from '../SelectStates';

export const State = props => (
	<FieldWrapper>
		<FieldName>State</FieldName>
		<OrderFormConnector
			render={({ shipping: { state }, handleShippingFieldChange }) => (
				<SelectField value={state} field="state" handleChange={handleShippingFieldChange}>
					<SelectStates key={''} />
				</SelectField>
			)}
		/>
	</FieldWrapper>
);
