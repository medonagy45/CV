import React, { Component } from "react";
class SectionTitle extends Component {
  state = {};
  render() {
    return (
      <tr>
        <th colSpan="2" style={styles.content}>
          {this.props.title}
        </th>
      </tr>
    );
  }
}

const styles = {
  content: {
    // colspan: 2,
    borderBottomColor: "rgb(192, 192, 192)",
    borderBottomStyle: "solid",
    borderBottomWidth: "0.99537px",
    borderCollapse: "collapse",
    boxSizing: "border-box",
    color: "rgb(68, 177, 215)",
    display: "table-cell",
    fontSize: "15px",
    fontWeight: "400",
    height: "20.7407px",
    lineHeight: "17px",
    marginBottom: "2px",
    paddingBottom: "3px",
    paddingLeft: "2px",
    paddingRight: "2px"
  }
};
export default SectionTitle;
