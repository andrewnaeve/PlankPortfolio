import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ready } from '../../actions/ready';
import YouTube from 'react-youtube';
import './YouTubePlayer.css';

class YouTubePlayer extends Component {
	handleLoad = event => {
		const { ready, name } = this.props;
		ready(name);
	};

	render() {
		const opts = {
			width: '560',
			height: '315'
		};
		return (
			<OuterWrapper>
				<MediaWrapper>
					<YouTube
						videoId="B5nF1Mmte0M"
						opts={opts}
						className="iframeStyle"
						onReady={this.handleLoad}
					/>
				</MediaWrapper>
			</OuterWrapper>
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

export default connect(null, mapDispatchToProps)(YouTubePlayer);

const OuterWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	padding-top: 10px;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;

const MediaWrapper = styled.div`
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 35px;
	height: 0;
	width: 100%;
	overflow: hidden;
	height: 100%;
`;

const iframeStyle = {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%'
};
