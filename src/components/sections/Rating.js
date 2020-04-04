import React, { Component } from "react";
import FilledRating from "./filledRating";
import UnfilledRating from "./unfilledRating";

class Rating extends Component {
  state = {};
  render() {
    return (
      <>
        <FilledRating value={this.props.value}></FilledRating>
        <UnfilledRating value={this.props.value}></UnfilledRating>
      </>
    );
    // <FontAwesomeIcon icon={faCircle} />;
  }
}

export default Rating;
