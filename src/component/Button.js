import React from "react";
import languageContext from "../contexts/languageContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Envoyer";
  }
  render() {
    return (
      <div className="ui button primary">
        <languageContext.Consumer>
          {value => this.renderSubmit(value)}
        </languageContext.Consumer>
      </div>
    );
  }
}

export default Button;
