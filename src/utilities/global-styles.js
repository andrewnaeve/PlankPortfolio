import { injectGlobal } from 'styled-components';
import Abel from '../fonts/Abel-Regular.ttf';

injectGlobal`
	@font-face {
		font-family: 'Abel';
		src: url('${Abel}');
		format('ttf');
	}
	.iframeStyle {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;
