import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ready } from '../../actions/ready';
import YouTube from 'react-youtube';

const opts = {
	width: '560',
	height: '315'
};

const YouTubePlayer = props => (
	<OuterWrapper>
		<MediaWrapper>
			<YouTube
				videoId="B5nF1Mmte0M"
				opts={opts}
				className="iframeStyle"
				onReady={() => props.ready(props.title)}
			/>
		</MediaWrapper>
	</OuterWrapper>
);

const mapDispatchToProps = dispatch => {
	return {
		ready(title) {
			dispatch(ready(title));
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
