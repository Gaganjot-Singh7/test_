import React from "react";
import radialBg from "/public/img/radial-left.svg"
import "./Solution.css";
import callico1 from "../../../../public/img/callneedsico1.png";
import callico2 from "../../../../public/img/callneedsico2.png";
import callico3 from "../../../../public/img/callneedsico3.png";
import callico4 from "../../../../public/img/callneedsico4.png";

function Solution() {
  return (
    <>
      <div className="bgBlack smartPet_Solution_section poppins">
        <div className="container-fluid">
          <div className="solution_part_heading p-0">
            <div className="sp_solution_section text-center">
            <h2 className=" solution_title"> Solutions</h2>
            {/* <img src="/img/underline.png" className="sp_solution_line" alt="" /> */}
            </div>
            <p className="mx-auto  smartPet_solution_para ">
            We implemented a comprehensive digital marketing strategy tailored to Smart Pet Depot's needs
            </p>
          </div>

          <div className="row w-100 text-center  mx-auto">
            <div className="col-lg-3 smartPet_div_solution p-0">
              {" "}
              <div className="solution_section ">
                {" "}
                <img src={callico1.src} alt="Social"  />{" "}
                <p>
                  <span className="smartPet_solution_sections">Social Media Marketing:</span>We developed engaging content for platforms like Instagram and Facebook, featuring pet products and customer testimonials. Interactive posts and promotions helped build a community of pet lovers.
                </p>
              </div>
            </div>
            <div className="col-lg-3 smartPet_div_solution p-0">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico2.src} alt="Website"  />{" "}
                <p>
                  {" "}
                  <span className="smartPet_solution_sections"> Website SEO: </span>The website was optimized for relevant keywords like “pet accessories online” and “best pet products.” Technical improvements were made to enhance site speed and user experience.
                </p>
              </div>
            </div>
            <div className="col-lg-3 smartPet_div_solution p-0">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico3.src} alt="Local"  />{" "}
                <p>
                  {" "}
                  <span className="smartPet_solution_sections">Local SEO:</span>We optimized Smart Pet Depot’s Google My Business listing and implemented location-based keywords to improve visibility in local searches and attract customers from the surrounding area.
                </p>
              </div>
            </div>

            <div className="col-lg-3 smartPet_div_solution p-0  ">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico4.src} alt="Paid"  />{" "}
                <p>
                  {" "}
                  <span className="smartPet_solution_sections">Paid Ads: </span> Targeted Google and social media ad campaigns were launched, promoting seasonal sales and best-selling products to drive traffic and boost conversions.
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
