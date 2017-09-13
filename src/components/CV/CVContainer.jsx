import React, { Component } from 'react';
import styled from 'styled-components';
import Shows from './Shows';
import Publications from './Publications';
import Education from './Education';
import ProfilePic from './ProfilePic';
import AnimatedContainer from '../Animation/AnimatedContainer';
import NancyPlank from '../../img/NancyPlank.jpg';
import { ready } from '../../actions/ready';
import { connect } from 'react-redux';

class CVWrapper extends Component {
	componentDidMount() {
		const { ready } = this.props;
		ready('CVContent');
	}
	render() {
		return (
			<Container>
				<AnimatedContainer name={NancyPlank}>
					<ProfilePic name={NancyPlank} />
				</AnimatedContainer>
				<AnimatedContainer name={'CVContent'}>
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
		ready(name) {
			dispatch(ready(name));
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
