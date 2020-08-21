import React from "react";
import gear from "../../assets/images/gear-icon.svg";
import Menu from "../menu/menu.jsx";

export const Settings = (props) => {
  // TODO: Need to add trigger logic on gear icon to display menu
  return (
    <div className="settings">
      <img src={gear} alt="menu" />
      {/* TODO: make alt description dynamic  */}
      <Menu />
    </div>
  );
};

export default Settings;
