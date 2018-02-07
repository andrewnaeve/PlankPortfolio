import styled from 'styled-components';
import { media } from '../../../../utilities/style-utils';
export const FieldWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 12px;
	${media.smallPhones`
	width: 100%;
`};
	${media.laptop`
	width: 75%;
`};
`;
