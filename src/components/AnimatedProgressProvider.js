import React from "react";
import { Animate } from "react-move";
import VisibilitySensor from "react-visibility-sensor";

class AnimatedProgressProvider extends React.Component {
  interval = undefined;

  state = {
    isAnimated: true,
  };

  static defaultProps = {
    valueStart: 0,
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: true,
        });
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated,
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <VisibilitySensor onChange={isVisible => {
        if (isVisible && !this.state.isAnimated) {
          this.setState({ isAnimated: true });
        }
        if (isVisible && this.state.isAnimated) {
          this.setState({ isAnimated: false });
        }
      
      
      }}>
        <Animate
          start={() => ({
            value: this.props.valueStart,
          })}
          update={() => ({
            value: [
              this.state.isAnimated
                ? this.props.valueEnd
                : this.props.valueStart,
            ],
            timing: {
              duration: this.props.duration * 1000,
              ease: this.props.easingFunction,
            },
          })}
        >
          {({ value }) => this.props.children(value)}
        </Animate>
      </VisibilitySensor>
    );
  }
}

export default AnimatedProgressProvider;
