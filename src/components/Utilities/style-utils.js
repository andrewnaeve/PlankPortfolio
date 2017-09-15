import { css } from 'styled-components';

export const media = {
	smallPhones: (...args) => css`
    @media (min-width: 320px) {
      ${css(...args)}
    }
  `,
	largePhones: (...args) => css`
		@media (min-width : 400px) {
			${css(...args)}
		}
	`,
	tablets: (...args) => css`
		@media (min-width : 768px) {
			${css(...args)}
		}
  `,
	laptop: (...args) => css`
		@media (min-width : 1024px) {
			${css(...args)}
		}
  `,
	desktop: (...args) => css`
		@media (min-width : 1440px) {
			${css(...args)}
		}
  `,
	fourKay: (...args) => css`
		@media (min-width : 2560px) {
			${css(...args)}
		}
  `
};
