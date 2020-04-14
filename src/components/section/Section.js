import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import SectionBody from "./SectionBody";
import { StyleContext } from "../../context/StyleContext";
import Photo from "../sections/Photo";
// import photo from "../../crop.jpg";
class Section extends Component {
  state = {
    showPlaceHolder: false
  };
  onDragStart = env => {
    // console.log("dragging ", env, id);
    console.log("DROP Start");
    env.dataTransfer.setData("page", this.props.page);
    env.dataTransfer.setData("id", this.props.id);
    this.setState({
      showPlaceHolder: true
    });
  };
  onDragOver = event => {
    event.preventDefault();
  };
  onDrop = ev => {
    ev.preventDefault();
    let oldPage = parseInt(ev.dataTransfer.getData("page"));
    let oldSection = parseInt(ev.dataTransfer.getData("id"));
    console.log();
    if (oldPage !== this.props.page || oldSection !== this.props.id) {
      this.props.move(
        { page: oldPage, id: oldSection },
        { page: this.props.page, id: this.props.id }
      );
      this.setState({
        showPlaceHolder: false
      });
    }
  };
  render() {
    // var photo = window.location.origin + "/crop.jpg";
    console.log(this.state.showPlaceHolder);

    // if (this.state.showPlaceHolder)
    //   return <div className={this.context.styles["box-placeholder"]} />;
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
