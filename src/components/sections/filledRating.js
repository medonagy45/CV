import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
class FilledRating extends Component {
  state = {};
  render() {
    var rows = [];
    for (let i = 0; i < this.props.value.rating; i++) {
      rows.push(
        <FontAwesomeIcon
          key={i}
          icon={faCircle}
          style={{
            padding: "2px"
          }}
        />
      );
    }
    return rows;
  }
}

export default FilledRating;
