import React, { Component } from "react";
import { StyleContext } from "../context/StyleContext";

class Page extends Component {
  state = {};
  render() {
    return (
      <div className={this.context.styles.Page}>{this.props.children}</div>
    );
  }
}
Page.contextType = StyleContext;
export default Page;
