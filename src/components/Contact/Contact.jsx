import React from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../Animation/AnimatedContainer';
import Email from './Email';
import Instagram from './Instagram';
import { connect } from 'react-redux';
import { ready } from '../../actions/ready';

const Contact = props => (
	<Container>
		<Row>
			<AnimatedContainer>
				<Email title={'Email'} ready={props.ready} />
			</AnimatedContainer>
		</Row>
		<Row>
			<AnimatedContainer>
				<Instagram title={'Instagram'} ready={props.ready} />
			</AnimatedContainer>
		</Row>
	</Container>
);

const mapDispatchToProps = dispatch => {
	return {
		ready(title) {
			dispatch(ready(title));
		}
	};
};

export default connect(null, mapDispatchToProps)(Contact);

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	max-width: 60%;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const Row = styled.div`
	display: flex;
	font-family: 'Abel', sans-serif;
	background-color: transparent;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
