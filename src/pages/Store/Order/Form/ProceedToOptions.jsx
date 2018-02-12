import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { FieldWrapper } from './FieldWrapper';
import { OrderFormConnector } from './OrderFormConnector';

const ProceedToOptions = props => (
	<OrderFormConnector
		render={renderProps => (
			<ProceedToOptionsWithProps history={props.history} {...renderProps} />
		)}
	/>
);

class ProceedToOptionsWithProps extends Component {
	componentWillReceiveProps(nextProps) {
		const { history, formIsValid } = this.props;
		if (nextProps.formIsValid && formIsValid !== nextProps.formIsValid) {
			history.push('/Store/Basket/Shipping/Options');
		}
	}

	render() {
		const { checkingValidation, validateForm, formIsValid, submitted } = this.props;
		return (
			<FieldWrapper>
				<Container onClick={validateForm}>
					<Proceed formIsValid={formIsValid} submitted={submitted}>
						{!submitted && 'Proceed'}
						{submitted && !formIsValid && 'Missing items!'}
						{submitted && formIsValid && 'Proceed'}
					</Proceed>
				</Container>
			</FieldWrapper>
		);
	}
}

const Container = styled.div`
	display: flex;
	margin-bottom: 15px;
	margin-top: 25px;
	justify-content: flex-end;
`;

const Proceed = styled.div.attrs({
	border: props => (props.submitted && !props.formIsValid ? '1px solid red' : '1px solid black')
})`
	display: flex;
	width: 200px;
	height: 50px;
	border: ${props => props.border};
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	font-family: 'Abel', sans-serif;
	font-size: 1.5rem;
	cursor: pointer;
	text-align: center;
`;

export default withRouter(ProceedToOptions);
