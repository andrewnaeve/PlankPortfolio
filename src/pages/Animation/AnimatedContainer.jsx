import React, { Component } from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';
import { Easing } from 'react-spring/dist/addons';

class AnimatedContainer extends Component {
  state = {
    loaded: false
  };

  _handleLoad = this._handleLoad.bind(this);

  render() {
    return this.props.render({
      handleLoad: this._handleLoad,
      renderAnimation: this._renderAnimation
    });
  }

  _renderAnimation = component => {
    const { loaded } = this.state;

    const dynamicStyle = {
      opacity: loaded ? 1.0 : 0.0,
      position: loaded ? -10 : 0
    };

    const animationConfig = key => {
      return key === 'opacity' ? Easing.linear : Easing.elastic;
    };

    return (
      <Spring to={dynamicStyle} config={animationConfig}>
        {({ position, opacity }) => (
          <AnimatedDiv
            style={{
              transform: `translate3d(0, ${position}px, 0)`,
              WebkitTransform: `translate3d(0, ${position}px, 0)`,
              opacity: `${opacity}`
            }}
          >
            {component}
          </AnimatedDiv>
        )}
      </Spring>
    );
  };

  _handleLoad() {
    this.setState({
      loaded: true
    });
  }
}

export default AnimatedContainer;

const AnimatedDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
