import React, { Component } from "react";
import Rating from "../sections/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SectionBody extends Component {
  state = {};
  render() {
    if (Array.isArray(this.props.body))
      //body without label
      return this.props.body.map(data => (
        <div style={styles.content}>
          <FontAwesomeIcon style={{ padding: "2px" }} icon="check" />
          <span dangerouslySetInnerHTML={{ __html: data }}></span>
          <br />
        </div>
      ));
    return Object.keys(this.props.body).map((keyName, i) => (
      <tr key={i} style={{ lineHeight: "12.65px" }}>
        <th style={styles.label}>
          <span>{keyName}</span>
          {keyName ? ":" : ""}
        </th>
        <td>
          {this.props.body[keyName] instanceof Object ? (
            <Rating value={this.props.body[keyName]}></Rating>
          ) : (
            <div
              style={styles.content}
              dangerouslySetInnerHTML={{ __html: this.props.body[keyName] }}
            />
          )}

          {/* <div style={styles.content}>{this.props.body[keyName]}</div> */}
        </td>
      </tr>
    ));
  }
}

const styles = {
  label: {
    borderCollapse: "collapse",
    color: "rgb(39, 37, 41)",
    display: "table-cell",
    fontSize: "11px",
    fontWeight: "700",
    height: "14.5023px",
    lineHeight: "16px",
    padding: "2px",
    textAlign: "left",
    verticalAlign: "top",
    width: "150px"
  },
  content: {
    borderCollapse: "collapse",
    color: "rgb(39, 37, 41)",
    display: "block",
    // fontFamily: "Lato Italic",
    fontSize: "11px",
    // height: "12.5926px",
    lineHeight: "12.65px"
  }
};
export default SectionBody;
