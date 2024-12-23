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
      <div className="bgBlack grill_Solution_section poppins">
        <div className="container-fluid">
          <div className="container-fluid  solution_part_heading p-0">
            <div className="g_Solution_Section text-center">
            <h2 className=" solution_title"> Solutions</h2>
            {/* <img src="/img/underline.png" alt=""  className="g_solution_line" /> */}
            </div>
            <p className="mx-auto  grill_solution_para ">
            We employed a streamlined digital marketing strategy for The Grill Father
            </p>
          </div>

          <div className="row w-100 ul_grill_section m-auto">
            <div className="col-lg-3 grill_div_solution  p-0">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico1.src} alt="Social Media Marketing"  />{" "}
                <p>
                  <span className="grill_solution_sections">Social Media Marketing:</span>  Created engaging posts on Instagram and Facebook to showcase their unique burgers and brand personality, driving customer engagement.
                </p>
              </div>
            </div>
            <div className="col-lg-3 grill_div_solution p-0">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico2.src} alt="Website SEO"  />{" "}
                <p>
                  {" "}
                  <span className="grill_solution_sections">Website SEO: </span>  Optimized the site for keywords like “best burgers in the UK,” improving search rankings and online visibility.
                </p>
              </div>
            </div>
            <div className="col-lg-3 grill_div_solution p-0">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico3.src} alt="Local SEO"  />{" "}
                <p>
                  {" "}
                  <span className="grill_solution_sections">Local SEO:</span>  Enhanced their Google My Business listing and used location-specific keywords to attract nearby customers.
                </p>
              </div>
            </div>

            <div className="col-lg-3 grill_div_solution p-0">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico4.src} alt="Paid Ads"  />{" "}
                <p>
                  {" "}
                  <span className="grill_solution_sections">Paid Ads: </span>  Launched targeted Google and Meta ads to promote special offers, driving both online orders and in-store visits.
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
