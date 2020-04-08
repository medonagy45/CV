import React, { Component } from "react";
class Page extends Component {
  state = {};
  render() {
    return <div style={styles.page}>{this.props.children} </div>;
  }
}

const styles = {
  page: {
    background: "white",
    padding: "10px",
    width: "21cm",
    minHeight: "29.7cm",
    marginBottom: "10px"
  }
};
export default Page;
