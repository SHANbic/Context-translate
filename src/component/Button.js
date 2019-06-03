import React from "react";
import languageContext from "../contexts/languageContext";

class Button extends React.Component {
  static contextType = languageContext;
  render() {
    return <div className="ui button primary">Submit</div>;
  }
}

export default Button;
