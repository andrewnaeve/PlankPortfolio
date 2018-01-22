import React, { Component } from 'react';
import styled from 'styled-components';
import { Overlay } from '../../common/Overlay';
import { Motion, spring } from 'react-motion';
import { StoreImage } from './StoreImage';

export class StoreModal extends Component {
	render() {
		const {
			show,
			closeModal,
			height,
			width,
			url,
			title,
			loaded,
			loading,
			showModal,
			description
		} = this.props;
		const dynamicStyle = {
			position: spring(show ? 0 : 1000, { stiffness: 80, damping: 14 })
		};
		return (
			<Overlay show={show}>
				<FlexContainer onClick={closeModal}>
					<Motion style={dynamicStyle}>
						{iS => (
							<ModalBody
								show={show}
								style={{ transform: `translateY(${iS.position}px)` }}
							>
								<Title>{title}</Title>
								<StoreImage
									height={height}
									width={width}
									url={url}
									title={title}
									loaded={loaded}
									loading={loading}
									showModal={showModal}
									heightFactor={700}
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
	border-radius: 5px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f1f1f1;
`;

const Title = styled.h1`
	font-family: 'Abel', sans-serif;
	font-size: 3rem;
	margin: 10px;
`;

const Description = styled.h2`
	font-family: 'Abel', sans-serif;
	font-size: 2rem;
	margin: 10px;
`;
