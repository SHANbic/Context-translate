import React from "react";
import UserCreate from "./UserCreate";
import languageContext from "../contexts/languageContext";
import LanguageSelector from "./LanguageSelector";
import { LanguageStore } from "../contexts/languageContext";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <UserCreate />
        </LanguageStore>
      </div>
    );
  }
}

export default App;
