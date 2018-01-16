import React, { Component } from 'react';
import styled from 'styled-components';
import Shows from './Shows';
import Publications from './Publications';
import Education from './Education';

class MarkupWrapper extends Component {
	componentDidMount() {
		const { handleLoad } = this.props;
		handleLoad();
	}
	render() {
		return (
			<Row>
				<Column>
					<Publications />
					<Shows />
				</Column>
				<Column>
					<Education />
				</Column>
			</Row>
		);
	}
}

export default MarkupWrapper;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	font-family: 'Abel', sans-serif;
	width: 100%;
`;
const Column = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;
	width: calc(100% /2);
`;
