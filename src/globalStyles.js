import { injectGlobal } from 'styled-components';
import Abel from './fonts/Abel-Regular.ttf';
import FontAwesome from './fonts/fontawesome-webfont.woff2?v=4.7.0';

injectGlobal`
	@font-face {
		font-family: 'Abel';
		src: url('${Abel}');
		format('ttf');
	}
	@font-face {
		font-family: 'FontAwesome';
		src: url('${FontAwesome}');
		format('woff2');
	}
    .fa {
		display: inline-block;
		font: normal normal normal 14px/1 FontAwesome;
		font-size: inherit;
		text-rendering: auto;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	  }
  
	  .fa-instagram:before {
		content: '\f16d';
	  }
  
	  .fa-envelope-o:before {
		content: '\f003';
	  }
  
	  .iframeStyle {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	  }
`;
