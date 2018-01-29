import React, { Component } from 'react';
import styled from 'styled-components';
import { Overlay } from '../../common/Overlay';
import { Motion, spring } from 'react-motion';
import { StoreImage } from './StoreImage';
import { CloseModalButton } from './CloseModalButton';

export class StoreModal extends Component {
	render() {
		const {
			show,
			loaded,
			loading,
			item: { url, title, description, height, width }
		} = this.props;
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
								<StoreImage
									height={height}
									width={width}
									url={url}
									title={title}
									loaded={loaded}
									loading={loading}
									description={description}
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
	z-index: 4;
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
