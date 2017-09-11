import React, { Component } from 'react';
import styled from 'styled-components';
import Shows from './Shows';
import Publications from './Publications';
import Education from './Education';
import ProfilePic from './ProfilePic';
import AnimatedContainer from '../AnimatedContainer';
import NancyPlank from '../../img/NancyPlank.jpg';
import { imagesReady } from '../../actions/imagesReady';
import { connect } from 'react-redux';

class CVWrapper extends Component {
	componentDidMount() {
		const { imagesReady } = this.props;
		imagesReady('CVContent');
	}
	render() {
		return (
			<Container>
				<AnimatedContainer url={NancyPlank}>
					<ProfilePic url={NancyPlank} />
				</AnimatedContainer>
				<AnimatedContainer url={'CVContent'}>
					<Row>
						<Column>
							<Publications />
							<Shows />
						</Column>
						<Column>
							<Education />
						</Column>
					</Row>
				</AnimatedContainer>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		imagesReady(url) {
			dispatch(imagesReady(url));
		}
	};
};

export default connect(null, mapDispatchToProps)(CVWrapper);

const Container = styled.div`
	display: flex;
	width: 95%;
	height: 100%;
	flex-direction: column;
	margin-top: 20px;
`;
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
