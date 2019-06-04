import React from "react";
import languageContext from "../contexts/languageContext";

class Button extends React.Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Envoyer";
  }
  render() {
    return (
      <div className="ui button primary">
        <languageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </languageContext.Consumer>
      </div>
    );
  }
}

export default Button;
