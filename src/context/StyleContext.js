import React, { createContext, Component } from "react";
import style from "../styles/cv1.module.css";
export const StyleContext = createContext();

class StyleContextProvider extends Component {
  state = {
    styles: style
  };
  render() {
    return (
      <StyleContext.Provider value={this.state}>
        {this.props.children}
      </StyleContext.Provider>
    );
  }
}

export default StyleContextProvider;
