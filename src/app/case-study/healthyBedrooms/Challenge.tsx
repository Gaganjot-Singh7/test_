import React from "react";
import "./Challenge.css";
import radialRight from "../../../../public/img/radial-right.svg";
import Image from "next/image";
function Challenges(props) {
  return (
    <>
      <div
        className="bgBlack container_healthyBedrooms poppins"
        style={{
          backgroundImage: `url(${radialRight.svg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container  challenge_box  ">
          <div className="healthyBedrooms_challenge">
          <div className="heading text-center"></div>
          <h2 className=" healthyBedrooms_challenge_title">Challenges</h2>
            
          {/* <img src="/img/underline.png" alt="" srcset="" className="healthy_challenge_underline "/> */}
         
          </div>

          <p className="mx-auto  healthyBedrooms_challenge_para ">
            {props.para}
          </p>
          <div className="healthyBedrooms_img_data row mx-auto">
            <div className="col-xs-12 col-md-5 col-lg-6 healthyBedrooms_img_main p-0" data-aos="fade-right">
              <img
                className="healthyBedrooms_img_profile "
                src={props.img}
                alt="healthyBedrooms_img_profile"
              />
            </div>
           

            <div className="col-xs-12 col-md-5 col-lg-6 challenge_ul_part p-0 " data-aos="fade-up-left">
              <ul className="healthyBedrooms_ul_challenge ">
                <li className=" healthyBedrooms_li_challenge ">
                {props.li_1} 
                </li>
                <li className=" healthyBedrooms_li_challenge ">
                {props.li_2}
                </li>
                <li className=" healthyBedrooms_li_challenge ">
                {props.li_3}
                </li>
                <li className=" healthyBedrooms_li_challenge ">
                {props.li_4}
                </li>
                <li className=" healthyBedrooms_li_challenge ">
                {props.li_5}
                </li>
                <li className=" healthyBedrooms_li_challenge ">
                {props.li_6}
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
