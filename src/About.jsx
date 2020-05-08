import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1 className="content-text" style={titleAbout}>
        About Me .
      </h1>
      <div className="content-text" style={bodyAbout}>
      <div style={profilepic} className="w-full lg:w-1/6 md:w-1/2">
        <img src={"/portfolio_react/src/images/profilepic.png"} />
      </div>
        <p className="content-text" style={textAbout}>
          Hi! I'm Daria Lykova, a Software Developer based in Stockholm, Sweden.
          How cool of you to drop by!
        </p>
        <p className="content-text" style={textAbout}>
          I am a curious code addict who has worked mostly in .NET Core
          framework for the last year and now am looking for creative horizons
          to explore. If you would like to get in touch, just hit the button!{" "}
        </p>
        <a
          href="mailto:daria.lykova@gmail.com"
          target="_blank"
          style={detailsBtn}
          className="text-white border border-white text-xs py-1 px-2"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
const titleAbout = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "35px",
  lineHeight: "25px",
  letterSpacing: "-0.10em",
  color: "white",
  padding: "50px",
};

const bodyAbout = {
  paddingTop: "40px",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "25px",
  letterSpacing: "-0em",
  color: "white",
  paddingLeft: "200px",
  paddingRight: "100px",
  paddingTop: "10px",
  
};

const textAbout = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "18px",
  lineHeight: "25px",
  letterSpacing: "0em",
  color: "white",
  padding: "10px",
  paddingLeft: "20px",
  paddingRight: "200px",
  paddingButtom: "100px",
};

const detailsBtn = {
  fontFamily: "Montserrat",
  fontWeight: "bold",
  letterSpacing: "0em",
  textDecoration: "none",
  marginLeft: "20px",
  marginTop: "25px",
};

const profilepic = {
  padding: "20px",
};

export default About;
