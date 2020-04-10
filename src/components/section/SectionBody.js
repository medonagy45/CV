import React, { Component } from "react";
import Rating from "../sections/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyleContext } from "../../context/StyleContext";
class SectionBody extends Component {
  state = {};
  render() {
    if (Array.isArray(this.props.body))
      //body without label
      return this.props.body.map(data => (
        <div className={this.context.styles.content}>
          <FontAwesomeIcon style={{ padding: "2px" }} icon="check" />
          <span dangerouslySetInnerHTML={{ __html: data }}></span>
          <br />
        </div>
      ));
    return Object.keys(this.props.body).map((keyName, i) => (
      <tr key={i} style={{ lineHeight: "12.65px" }}>
        <th className={this.context.styles.label}>
          <span>{keyName}</span>
          {keyName ? ":" : ""}
        </th>
        <td>
          {this.props.body[keyName] instanceof Object ? (
            <Rating value={this.props.body[keyName]}></Rating>
          ) : (
            <div
              className={this.context.styles.content}
              dangerouslySetInnerHTML={{ __html: this.props.body[keyName] }}
            />
          )}

          {/* <div style={styles.content}>{this.props.body[keyName]}</div> */}
        </td>
      </tr>
    ));
  }
}
SectionBody.contextType = StyleContext;
export default SectionBody;
