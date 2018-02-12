import React from 'react';
import { Field } from './Field';
import { OrderFormConnector } from './OrderFormConnector';
import { FieldName } from './FieldName';
import { FieldWrapper } from './FieldWrapper';
import { ValidationError } from './ValidationError';
import styled from 'styled-components';

export const Email = props => (
	<FieldWrapper>
		<OrderFormConnector
			render={({ email, emailIsValid, handleEmailChange, handleEmailBlur, submitted }) => (
				<div>
					<Row>
						<FieldName submitted={submitted} value={email}>
							Email
						</FieldName>
						<Separator />
						{!emailIsValid && <ValidationError error={'Please enter a valid email.'} />}
					</Row>
					<Field
						value={email}
						field="email"
						handleChange={handleEmailChange}
						onBlur={handleEmailBlur}
					/>
				</div>
			)}
		/>
	</FieldWrapper>
);

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

const Separator = styled.div`
	display: flex;
	flex: 1;
`;
