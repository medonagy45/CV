import React, { Component } from "react";
import { StyleContext } from "../../context/StyleContext";
class SectionTitle extends Component {
  state = {};
  render() {
    return (
      <tr>
        <th colSpan="2" className={this.context.styles.title}>
          {this.props.title}
        </th>
      </tr>
    );
  }
}
SectionTitle.contextType = StyleContext;
export default SectionTitle;
