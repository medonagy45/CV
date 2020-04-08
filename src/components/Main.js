import React, { Component } from "react";
import ReactDOM from "react-dom";

import Background from "./Background";
import Page from "./Page";
import Section from "./section/Section";
import { getUserData } from "./fetchData/userData";
class Main extends Component {
  constructor(props) {
    super(props);
    this.ref = [];
    this.ref[0] = React.createRef();
    this.count = 0;
  }
  state = { data: [getUserData().sections] };
  componentDidMount() {
    let newData = this.state.data;
    console.log(this);

    let pageHeight = ReactDOM.findDOMNode(
      this.ref[0].current
    ).getBoundingClientRect().height;
    let overHeight = pageHeight - 1122.52;
    // console.log(overHeight);

    // console.log("page height", overHeight);
    if (overHeight > 0) {
      let lastElement = newData[0].pop();
      this.setState({ data: [newData[0], [lastElement]] });
      this.ref[1] = React.createRef();
    }
  }
  componentDidUpdate() {
    for (let index = 0; index < this.ref.length; index++) {
      console.log(index);
      console.log(this.ref.length);

      let pageHeight = ReactDOM.findDOMNode(
        this.ref[index].current
      ).getBoundingClientRect().height;
      let overHeight = pageHeight - 1122.52;

      // console.log(" componentDidUpdate page height", overHeight);
      let newData = this.state.data;
      if (overHeight > 0) {
        let lastElement = newData[index].pop();
        newData[index + 1].unshift(lastElement);
        this.setState({
          data: newData
        });
        this.ref[index + 1] = React.createRef();
        return;
      }
    }
  }
  render() {
    return (
      <Background>
        {this.state.data.map((data, index) => (
          <Page key={index} ref={this.ref[index]}>
            {data.map((data, index) => (
              <Section
                key={index}
                title={data.title}
                body={data.body}
                photo={data.photo}
              ></Section>
            ))}
          </Page>
        ))}
      </Background>
    );
  }
}
export default Main;
