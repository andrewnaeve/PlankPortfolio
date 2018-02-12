import React from 'react';
import { OrderFormConnector } from '../OrderFormConnector';
import { FieldName } from '../FieldName';
import { FieldWrapper } from '../FieldWrapper';
import { SelectField } from '../SelectField';
import { SelectStates } from '../SelectStates';
import styled from 'styled-components';
export const State = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ shipping: { state }, handleShippingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={state}>
							State
						</FieldName>
					</Row>
					<SelectField
						value={state}
						field="state"
						handleChange={handleShippingFieldChange}
					>
						<SelectStates key={''} />
					</SelectField>
				</div>
			)}
		/>
	</FieldWrapper>
);

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;
