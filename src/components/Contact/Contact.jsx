import React, { Component } from 'react';
import styled from 'styled-components';
import AnimatedContainer from '../AnimatedContainer';
import { connect } from 'react-redux';
import { imagesReady } from '../../actions/imagesReady';

class Contact extends Component {
	componentDidMount() {
		const { url, imagesReady } = this.props;
		imagesReady(url);
	}
	render() {
		return (
			<AnimatedContainer>
				<Container>
					<Row>
						<SocialLink href="mailto:nplank@me.com">
							NPlank@me.com
							<Icons
								style={{ fontSize: '5rem' }}
								className="fa fa-envelope-o"
							/>
						</SocialLink>
					</Row>
					<Row>
						<SocialLink
							href="https://www.instagram.com/nplank/?hl=en"
							target="_blank"
						>
							Instagram
							<Icons
								style={{ fontSize: '5rem' }}
								className="fa fa-instagram"
							/>
						</SocialLink>
					</Row>
				</Container>
			</AnimatedContainer>
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

export default connect(null, mapDispatchToProps)(Contact);

const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	max-width: 50%;
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

const SocialLink = styled.a`
	display: flex;
	font-size: 2rem;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: #747d7d;
`;

const Icons = styled.i`
	display: flex;
	font-size: 5rem;
	margin-top: 10px;
	margin-bottom: 20px;
	text-align: center;
`;
