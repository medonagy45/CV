import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
class UnfilledRating extends Component {
  state = {};
  render() {
    var rows = [];
    for (let i = this.props.value.rating; i < 6; i++) {
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

export default UnfilledRating;
