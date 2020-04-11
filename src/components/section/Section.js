import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import SectionBody from "./SectionBody";
import { StyleContext } from "../../context/StyleContext";
import Photo from "../sections/Photo";
// import photo from "../../crop.jpg";
class Section extends Component {
  onDragStart = env => {
    // console.log("dragging ", env, id);
    console.log("DROP Start");
    env.dataTransfer.setData("page", this.props.page);
    env.dataTransfer.setData("id", this.props.id);
  };
  onDragOver = event => {
    console.log("prevent default");
    event.preventDefault();
  };
  onDrop = ev => {
    ev.preventDefault();
    this.props.swap(
      {
        page: parseInt(ev.dataTransfer.getData("page")),
        id: parseInt(ev.dataTransfer.getData("id"))
      },
      {
        page: this.props.page,
        id: this.props.id
      }
    );
  };
  render() {
    // var photo = window.location.origin + "/crop.jpg";
    return (
      <div
        className={this.context.styles.section}
        draggable="true"
        onDragStart={e => this.onDragStart(e)}
        onDragOver={e => this.onDragOver(e)}
        onDrop={e => this.onDrop(e)}
      >
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
