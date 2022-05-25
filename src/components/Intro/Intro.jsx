import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import ThumbUp from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import GlassesImoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Izzy Zammil</span>
          <span>
            Beginner Front End Developer using React Js and Mobile Developer
            using React Native
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={GlassesImoji}
          alt=""
        />

        <motion.div
          initial={{ left: "74%", top: "-4%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18.2rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={ThumbUp} txt1="Mobile" txt2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
