import React from "react";
import "./challenges.css";

function Challenges() {
  return (
    <>
      <div className="container-fluid bgBlack container_vip position-sticky poppins">
        <div className=" challenge_box  ">
          <div className="vip_challenge_section ">
            <h2 className=" vip_challenge_title">Challenges</h2>
            {/* <img
              src="/img/underline.png"
              className="challenge_line"
              alt=""
              
            /> */}
          </div>

          <p className="mx-auto  vip_challenge_para ">
            VIP Number Shop operates in a niche market, where customers may not
            always be actively searching for VIP mobile numbers. This posed
            several challenges
          </p>
          <div className="container vip_img_data row mx-auto p-0">
            <div className="col-xs-12 col-md-5 col-lg-6 vip_img_main p-0">
              <img className="vip_img_profile " src="/vip/Frame.svg" alt="challenges" />
            </div>
           

            <div className="col-xs-12 col-md-5 col-lg-6 vip_ul_part p-0">
              <ul className="vip_ul_challenge ">
                <li className=" vip_li_challenge ">Niche Audience Targeting</li>
                <li className=" vip_li_challenge ">
                  Reaching potential buyers who understand the value of VIP
                  numbers and are willing to invest in them
                </li>
                <li className=" vip_li_challenge ">
                  Standing Out in a Competitive Market
                </li>
                <li className=" vip_li_challenge ">
                  Differentiating VIP Number Shop from competitors in the mobile
                  number industry
                </li>
                <li className=" vip_li_challenge ">
                  Converting Traffic into Sales
                </li>
                <li className=" vip_li_challenge ">
                  Despite a significant interest in VIP mobile numbers, the
                  challenge was converting that interest into purchases
                </li>
                <li className=" vip_li_challenge">
                  Multi-Channel Consistency
                </li>
                <li className=" vip_li_challenge ">
                  Ensuring a seamless, consistent message across SEO, paid ads,
                  social media, influencer campaigns, and mobile app
                  notifications to create a unified brand experience
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
