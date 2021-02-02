import React from "react";

const Banner = (props) => {
  return <img className="about__logo" src={props.src} alt={props.alt} />;
};

export default Banner;
