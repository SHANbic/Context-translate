import React from "react";
import languageContext from "../contexts/languageContext";

class Field extends React.Component {
  static contextType = languageContext;

  render() {
    console.log(this.context);
    return (
      <div className="ui field">
        <label>Name</label>
        <input />
      </div>
    );
  }
}

export default Field;
