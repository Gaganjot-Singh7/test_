import React from "react";
import "./About.css";
import Image from "next/image";
function About(props) {
  return (
    <>
      <div className="container-fluid about_Section poppins">
        <div className="healthyBedrooms_about_Section">
          <div className="healthyBedrooms_heading text-center">
            <h1 className="div_about" data-aos="fade-right">{props.title}</h1>
            {/* <img src="/img/underline.png"  className="about_underline" data-aos="fade-right"/> */}
          </div>
          <div className="healthyBedrooms_about_detail">

            
            {props.para}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
