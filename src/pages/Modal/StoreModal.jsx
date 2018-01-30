import React, { Component } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Common/Overlay';
import { Motion, spring } from 'react-motion';
import { ModalImage } from './ModalImage';
import { CloseModalButton } from './CloseModalButton';

export class StoreModal extends Component {
	render() {
		const { show, item: { url, title, description, height, width } } = this.props;
		const dynamicStyle = {
			position: spring(show ? 0 : 1000, { stiffness: 80, damping: 14 })
		};
		return (
			<Overlay show={show}>
				<FlexContainer>
					<Motion style={dynamicStyle}>
						{iS => (
							<ModalBody
								show={show}
								style={{ transform: `translateY(${iS.position}px)` }}
							>
								<CloseModalButton />
								<Title>{title}</Title>
								<ModalImage
									height={height}
									width={width}
									url={url}
									title={title}
									description={description}
								/>
								<Description>{description}</Description>
							</ModalBody>
						)}
					</Motion>
				</FlexContainer>
			</Overlay>
		);
	}
}

const FlexContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh * 0.9);
	border-radius: 5px;
	background-color: #f1f1f1;
`;

const Title = styled.h1`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	align-self: center;
	font-family: 'Abel', sans-serif;
	font-size: 3rem;
	margin: 0 20px 0 20px;
`;

const Description = styled.h2`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	font-family: 'Abel', sans-serif;
	font-size: 2.5rem;
	margin: 0 20px 0 20px;
`;
