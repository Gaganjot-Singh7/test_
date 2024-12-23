import React from "react";
import "./About.css";
function About() {
  return (
    <>
      <div className="techcity_about_Section poppins">
        <div className="container-fluid">
          <div className="techcity_heading">
            <div className="text-center">
              <h1 className="t_heading">About TechCity</h1>

              {/* <img src="/img/underline.png" className='techcity_about_line' alt=""  /> */}
            </div>
          </div>
          <div className="techcity_about_detail">
            TechCity is a reputable mobile phone repair service provider known
            for its reliable and efficient solutions. Offering a range of
            services, including screen replacements, battery replacements, and
            software repairs, TechCity caters to a diverse clientele in the
            local community. To strengthen its online presence and attract more
            customers, TechCity sought a comprehensive digital marketing
            approach.
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
