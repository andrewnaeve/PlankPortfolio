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
			render={({ billing: { billingState }, handleBillingFieldChange, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={billingState}>
							State
						</FieldName>
					</Row>
					<SelectField
						value={billingState}
						field="billingState"
						handleChange={handleBillingFieldChange}
					>
						<SelectStates />
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
