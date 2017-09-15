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
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;

const MediaWrapper = styled.div`
	position: relative;
	::after {
		content: '';
		display: block;
		padding-bottom: 56.25%;
		height: 0;
	}
`;
