import React from "react";
import "./Solution.css";
import callico1 from "../../../../public/img/callneedsico1.png";
import callico2 from "../../../../public/img/callneedsico2.png";
import callico3 from "../../../../public/img/callneedsico3.png";
import callico4 from "../../../../public/img/callneedsico4.png";
import callico5 from "../../../../public/img/callneedsico5.png";
// import callico3 from "../../../../../public/img/callneedsico3.png";
function Solution() {
  return (
    <>
      <div className="bgBlack Vip_Solution_section poppins">
        <div className="container-fluid">
          <div className="container-fluid  solution_part_heading p-0">
            <div className="vip_soluiton_section text-center">
              <h2 className=" solution_title "> Solutions</h2>
              {/* <img
                src="/img/underline.png"
                alt=""
                
                className="v_sol_line"
              /> */}
            </div>

            <p className="mx-auto  vip_solution_para ">
              To address VIP Number Shop's challenges, we implemented a focused,
              multi-channel approach
            </p>
          </div>

          <div className="row w-100 all_solutions_vip m-auto">
           
            <div className="col-lg-4 vip_div_solution  p-0 ">
              {" "}
              <div className="solution_section_healthy">
                {" "}
                <img src={callico1.src} alt="SEO Optimization:"  />{" "}
                <p>
                  <span className="vip_solution_sections">
                    SEO Optimization:
                  </span>{" "}
                  Targeted keywords like "VIP mobile numbers" were incorporated
                  into the website, alongside technical improvements for better
                  rankings.
                </p>
              </div>
            </div>

            <div className="col-lg-4 vip_div_solution  p-0">
              {" "}
              <div className="solution_section_healthy">
                {" "}
                <img src={callico2.src} alt=" Social Media Marketing:"  />{" "}
                <p>
                  {" "}
                  <span className="vip_solution_sections">
                    Social Media Marketing:
                  </span>{" "}
                  Engaging posts on Facebook, Instagram, and Twitter highlighted
                  the exclusivity of VIP numbers, using strategic hashtags to
                  boost reach and engagement.
                </p>
              </div>
            </div>
            <div className="col-lg-4 vip_div_solution  p-0">
              {" "}
              <div className="solution_section_healthy">
                {" "}
                <img src={callico3.src} alt="Paid Ads (Meta & Google):"  />{" "}
                <p>
                  {" "}
                  <span className="vip_solution_sections">
                    Paid Ads (Meta & Google):
                  </span>{" "}
                  Highly targeted ads promoted the benefits of owning VIP
                  numbers, driving qualified traffic to the website and boosting
                  conversions.
                </p>
              </div>
            </div>
          </div>

          <div className="row w-100 vip_div_solution_two_main p-0 m-auto">
            <div className="col-lg-4 vip_div_solution_two  p-0">
              {" "}
              <div className="solution_section_healthy">
                {" "}
                <img src={callico4.src} alt="SEO Optimization:"  />{" "}
                <p>
                  {" "}
                  <span className="vip_solution_sections">
                    SEO Optimization:
                  </span>{" "}
                  Collaborating with luxury lifestyle influencers helped promote
                  VIP Number Shop, creating trust and expanding brand awareness.
                </p>
              </div>
            </div>

            <div className="col-lg-4 vip_div_solution_two  p-0">
              {" "}
              <div className="solution_section_healthy">
                {" "}
                <img src={callico5.src} alt=" Mobile App Push Notifications:"  />{" "}
                <p>
                  {" "}
                  <span className="vip_solution_sections">
                    Mobile App Push Notifications:
                  </span>
                  Personalized push notifications encouraged app users to
                  explore and complete purchases, improving customer retention.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Solution;
