import React from "react";
import "./Footer.css";

import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} style={{ width: "100%" }} />
      <div className="f-content">
        <span>izzy.zammil@gmail.com</span>
        <div className="f-icons">
          <Insta size={"3rem"} color="white" />
          <Facebook size={"3rem"} color="white" />
          <Github size={"3rem"} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
