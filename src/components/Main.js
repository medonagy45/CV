import React, { Component } from "react";
import Background from "./Background";
import Page from "./Page";
import Section from "./section/Section";
import { getUserData } from "./fetchData/userData";
class Main extends Component {
  render() {
    return (
      <Background>
        <Page>
          {getUserData().sections.map((data, index) => (
            <Section
              key={index}
              title={data.title}
              body={data.body}
              photo={data.photo}
            ></Section>
          ))}
        </Page>
      </Background>
    );
  }
}
const styles = {
  section: {
    // display: "block",
    // float: "left",
    // width: "100%",
    // baddingButtom: "10px"
  }
};

export default Main;
