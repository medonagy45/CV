import React, { Component } from "react";
import { StyleContext } from "../context/StyleContext";

class Background extends Component {
  state = {};
  render() {
    return (
      <div className={this.context.styles.background}>
        {this.props.children}
      </div>
    );
  }
}
Background.contextType = StyleContext;
export default Background;
