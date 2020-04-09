import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import SectionBody from "./SectionBody";
// import photo from "../../crop.jpg";
class Section extends Component {
  render() {
    // var photo = window.location.origin + "/crop.jpg";
    return (
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        {this.props.photo ? (
          <>
            {/* <img style={styles.photo} src={photo} alt="" /> */}
            {/* <img style={styles.photo} src={this.props.photo.uri} alt="" /> */}
            <img
              style={styles.photo}
              src={process.env.PUBLIC_URL + "/crop.jpg"}
              alt=""
            />
          </>
        ) : (
          <></>
        )}
        <table style={styles.table}>
          <tbody>
            <SectionTitle title={this.props.title}></SectionTitle>
            <SectionBody body={this.props.body}></SectionBody>
          </tbody>
        </table>
      </div>
    );
  }
}
const styles = {
  table: {
    // fontFamily: "Lato Italic",
    // width: "425px",
    // width: "-webkit-fill-available",
    flex: 4
  },
  photo: {
    flex: 1,
    width: "112px",
    minHeight: "112px"
  }
};
export default Section;
