import React, { Component } from "react";
import { StyleContext } from "../../context/StyleContext";
class Photo extends Component {
  state = {};
  render() {
    if (this.props.instance)
      return (
        // <img style={styles.photo} src={this.props.instance.uri} alt="" />
        <img
          className={this.context.styles.photo}
          src={process.env.PUBLIC_URL + "/crop.jpg"}
          alt=""
        />
      );
    return <></>;
  }
}
Photo.contextType = StyleContext;

export default Photo;
