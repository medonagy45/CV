import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import SectionBody from "./SectionBody";
import { StyleContext } from "../../context/StyleContext";
import Photo from "../sections/Photo";
// import photo from "../../crop.jpg";
class Section extends Component {
  render() {
    // var photo = window.location.origin + "/crop.jpg";
    return (
      <div className={this.context.styles.section}>
        <Photo instance={this.props.photo}></Photo>
        <table className={this.context.styles.table}>
          <tbody>
            <SectionTitle title={this.props.title}></SectionTitle>
            <SectionBody body={this.props.body}></SectionBody>
          </tbody>
        </table>
      </div>
    );
  }
}
Section.contextType = StyleContext;
export default Section;
