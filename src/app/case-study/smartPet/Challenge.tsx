import React from "react";
import "./Challenge.css";
import radialRight from "../../../../public/img/radial-right.svg";
function Challenges() {
  return (
    <>
      <div
        className="bgBlack container_smartPet poppins"
        style={{
          backgroundImage: `url(${radialRight.svg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container  challenge_box  poppins">
          <div className="sp_challenge text-center">
            <h2 className=" smartPet_challenge_title">Challenges</h2>
            {/* <img
              src="/img/underline.png"
              alt=""
              className="sp_challenge_line"
            /> */}
          </div>
          <p className="mx-auto  smartPet_challenge_para ">
            Smart Pet Depot faced several challenges:
          </p>
          <div className="smartPet_img_data row mx-auto">
            <div className="col-xs-12 col-md-5 col-lg-6 smartPet_img_main p-0 ">
              <img
                className="smartPet_img_profile "
                src="/smartPet/Challenge.svg"
                alt="Challenge"
              />
            </div>

            <div className="col-xs-12 col-md-5 col-lg-6 ul_part p-0">
              <ul className="smartPet_ul_challenge ">
                <li className=" smartPet_li_challenge ">High Competition</li>
                <li className=" smartPet_li_challenge ">
                  The pet accessories market is saturated, making it difficult
                  to stand out among numerous competitors
                </li>
                <li className=" smartPet_li_challenge ">
                  Limited Online Visibility
                </li>
                <li className=" smartPet_li_challenge ">
                  While the store had a loyal local customer base, its online
                  presence needed improvement to reach a broader audience
                </li>
                <li className=" smartPet_li_challenge ">Driving Conversions</li>
                <li className=" smartPet_li_challenge ">
                  There was a need to convert website visitors into paying
                  customers, both for online orders and in-store visits
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
