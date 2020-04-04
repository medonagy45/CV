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
    height: "29.7cm",
    margin: "0mm 45mm"
  }
};
export default Page;
