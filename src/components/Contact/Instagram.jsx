import React, { Component } from 'react';
import styled from 'styled-components';
import instagramIcon from '../../svg/instagramIcon.svg';
import { connect } from 'react-redux';
import { ready } from '../../actions/ready';

class Instagram extends Component {
	handleLoad = () => {
		this.props.ready(this.props.title);
	};
	render() {
		return (
			<SocialLink
				href="https://www.instagram.com/nplank/?hl=en"
				target="_blank"
			>
				Instagram
				<Icons src={instagramIcon} onLoad={this.handleLoad} />
			</SocialLink>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		ready(title) {
			dispatch(ready(title));
		}
	};
};

export default connect(null, mapDispatchToProps)(Instagram);

const SocialLink = styled.a`
	display: flex;
	font-size: 2rem;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: #747d7d;
	margin-left: 10px;
	margin-right: 10px;
`;

const Icons = styled.img`
	display: flex;
	height: 80px;
	width: 80px;
	justify-content: center;
	align-items: start;
	margin-top: 10px;
	margin-bottom: 20px;
`;
