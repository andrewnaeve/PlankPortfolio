import React, { PureComponent } from 'react';
import styled from 'styled-components';

export class FieldName extends PureComponent {
	render() {
		const { submitted, value, children } = this.props;
		return (
			<Title submitted={submitted} value={value}>
				{children}
			</Title>
		);
	}
}

const Title = styled.h2.attrs({
	color: props => (props.submitted && props.value === '' ? 'red' : 'black')
})`
	font-size: 1.5rem;
	font-family: 'Abel';
	color: ${props => props.color};
`;
