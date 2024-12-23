import React from "react";
import "./Challenge.css";
import radialRight from "../../../../public/img/radial-right.svg";
function Challenges() {
  return (
    <>
      <div
        className="bgBlack container_techcity poppins"
        style={{
          backgroundImage: `url(${radialRight.svg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container  challenge_box  ">
          <div className="text-center">
            <h2 className=" techcity_challenge_title">Challenges</h2>
            {/* <img
              src="/img/underline.png"
              className="t_about_line"
              alt=""
              
            /> */}
          </div>
          <p className="mx-auto  techcity_challenge_para ">
            TechCity faced several challenges:
          </p>
          <div className="techcity_img_data row mx-auto">
            <div className="col-xs-12 col-md-6 col-lg-6 techcity_img_main p-0">
              <img
                className="techcity_img_profile "
                src="/techcity/Challenge.svg"
                alt="Challenge"
              />
            </div>
            

            <div className="col-xs-12 col-md-6 col-lg-6 tech_ul_part p-0">
              <ul className="techcity_ul_challenge ">
                <li className=" techcity_li_challenge ">
                  Competitive Landscape
                </li>
                <li className=" techcity_li_challenge ">
                  The mobile repair industry is highly competitive, making it
                  difficult to differentiate TechCity from other service
                  providers
                </li>
                <li className=" techcity_li_challenge ">
                  Limited Online Engagement
                </li>
                <li className=" techcity_li_challenge ">Although TechCity had a website, its online presence was not generating significant traffic or customer interactions
                </li>
                <li className=" techcity_li_challenge ">Local Visibility</li>
                <li className=" techcity_li_challenge ">The business needed to improve its local search rankings to attract customers searching for repair services in the area
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Challenges;
