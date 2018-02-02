import React, { Component } from 'react';
import styled from 'styled-components';
import { Thumbnail } from './Thumbnail';
import { CloseButton } from './CloseButton';

export class BasketItem extends Component {
	render() {
		const { title } = this.props;

		return (
			<Container>
				<div style={{ position: 'relative', width: '100%' }}>
					<CloseButton title={title} />
				</div>
				<Thumbnail {...this.props} />
			</Container>
		);
	}
}

const Container = styled.div`
	display: flex;
	margin-right: 20px;
	margin-left: 20px;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	border: 2px solid #d0d0d0;
	border-radius: 5px;
	height: 150px;
`;
// box-shadow: 5px 4px 12px 0px rgba(184, 184, 184, 1);
