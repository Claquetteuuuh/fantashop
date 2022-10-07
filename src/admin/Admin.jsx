import React, { useState, useEffect } from "react";
import "./admin.scss";
import EndSection from "./components/EndSection/EndSection";
import FirstSection from "./components/FirstSection/FirstSection";
import LogsSection from "./components/LogsSection/LogsSection";

const Admin = ({ accessToken }) => {
  const [isaccess, setIsaccess] = useState(false);

  useEffect(() => {
    fetch("https://api.fantashop.fr/users/getdata/" + accessToken)
      .then(res => res.json())
      .then(user => {
        if (user.discord.roles.includes("986623662000066570")) {
          setIsaccess(true);
        }
      })
  }, [accessToken]);
  if (isaccess) {
    return (
      <main className="admin__container">
        <div className="admin__content">
          <img className="title" src="./images/title_panel.png" alt="logo" />
          <FirstSection/>
          <LogsSection/>
          <EndSection/>
        </div>
      </main>
    );
  }
  else {
    return (
      <>{alert('Vous devez être admin pour voir cette page !')}</>
    )
  }
};

export default Admin;
