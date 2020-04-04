import React, { Component } from "react";
class Background extends Component {
  state = {};
  render() {
    return <div style={styles.background}>{this.props.children} </div>;
  }
}
const styles = {
  background: {
    background: "rgb(204,204,204)",
    // width: '2cm',
    height: "50cm"
  }
};
export default Background;
