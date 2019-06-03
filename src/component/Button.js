import React from "react";
import languageContext from "../contexts/languageContext";

class Button extends React.Component {
  static contextType = languageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Envoyer";
    return <div className="ui button primary">{text}</div>;
  }
}

export default Button;
