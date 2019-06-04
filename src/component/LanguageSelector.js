import React from "react";
import LanguageContext from "../contexts/languageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag fr"
          onClick={() => this.context.onLanguageChange("français")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
