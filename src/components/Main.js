import React, { Component } from "react";
import ReactDOM from "react-dom";

import Background from "./Background";
import Page from "./Page";
import Section from "./section/Section";
import { getUserData } from "./fetchData/userData";
import StyleContextProvider from "../context/StyleContext";
class Main extends Component {
  constructor(props) {
    super(props);
    this.ref = [];
    this.ref[0] = React.createRef();
    this.A4 = { height: 1122.52 };
  }
  state = { data: [getUserData().sections] };
  componentDidMount() {
    let newData = this.state.data;

    let pageHeight = ReactDOM.findDOMNode(
      this.ref[0].current
    ).getBoundingClientRect().height;
    let overHeight = pageHeight - this.A4.height;
    if (overHeight > 0) {
      let lastElement = newData[0].pop();
      this.setState({ data: [newData[0], [lastElement]] });
      this.ref[1] = React.createRef();
    }
  }
  componentDidUpdate() {
    console.log("update");

    for (let index = 0; index < this.ref.length; index++) {
      let page = ReactDOM.findDOMNode(this.ref[index].current);
      if (page) {
        let pageHeight = ReactDOM.findDOMNode(
          this.ref[index].current
        ).getBoundingClientRect().height;
        let overHeight = pageHeight - this.A4.height;
        let newData = this.state.data;
        if (overHeight > 0) {
          let lastElement = newData[index].pop();
          newData[index + 1]
            ? newData[index + 1].unshift(lastElement)
            : newData.push([lastElement]);
          this.setState({
            data: newData
          });
          if (index + 1 === this.ref.length)
            this.ref[index + 1] = React.createRef();
          return;
        }
      }
    }
  }
  move = (movingSection, fixedSection) => {
    let newData = this.state.data;
    let removed = newData[movingSection.page].splice(movingSection.id, 1);
    newData[fixedSection.page].splice(fixedSection.id, 0, ...removed);
    this.setState({ data: [newData.flat()] });
  };

  render() {
    return (
      <StyleContextProvider>
        <Background>
          {this.state.data.map((data, i) => (
            <Page key={i} ref={this.ref[i]}>
              {data.map((data, index) => (
                <Section
                  key={index}
                  title={data.title}
                  body={data.body}
                  photo={data.photo}
                  move={this.move}
                  page={i}
                  id={index}
                ></Section>
              ))}
            </Page>
          ))}
        </Background>
      </StyleContextProvider>
    );
  }
}
export default Main;
