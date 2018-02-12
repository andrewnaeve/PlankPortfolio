import React, { Component } from 'react';
import styled from 'styled-components';

export class OptionsContainer extends Component {
	render() {
		return (
			<Container>
				<ViewArea />
			</Container>
		);
	}
}

const Container = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
`;

const ViewArea = styled.div`
	display: flex;
	width: 80%;
	height: 100%;
	flex-direction: column;
`;
