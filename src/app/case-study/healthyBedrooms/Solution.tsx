import React from "react";
import "./Solution.css";
import Image from "next/image";
import callico1 from "../../../../public/img/callneedsico1.png";
import callico2 from "../../../../public/img/callneedsico2.png";
import callico3 from "../../../../public/img/callneedsico3.png";
function Solution() {
  return (
    <>
      <div className="bgBlack container-fluid healthyBedrooms_Solution_section poppins">
        
          <div className="  solution_part_heading">
            <div className="solution_div">
            <div className="heading-line text-center">
            <h2 className=" solution_title"> Solutions</h2>
            {/* <img img src="/img/underline.png" alt=""  className="healthy_solution_underline "/> */}
            </div>
            </div>
         

            <p className="mx-auto  healthyBedrooms_solution_para ">
            To address these challenges, we developed a focused digital marketing strategy for TechCity
            </p>
          </div>

          <div className="row w-100 justify-content-between p-0 m-auto">
            <div className="col-lg-4 healthyBedrooms_div_solution p-0 m-auto ">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico1.src} alt="Comprehensive" className="callarrow" />
                <p className="p_healthy_solution">
                  <span className="healthyBedrooms_solution_sections">Comprehensive Website SEO Overhaul:</span> We conducted in-depth keyword research and optimized Healthy Bedroom’s website with relevant search terms like "luxury mattresses," "organic mattresses," and "best mattress for health." On-page SEO improvements were made, including meta tags, content updates, and internal linking.
                </p>
              </div>
            </div>


            <div className="col-lg-4 healthyBedrooms_div_solution p-0 m-auto">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico2.src} alt="Targeted" className="callarrow" />
                <p className="p_healthy_solution">
                  {" "}
                  <span className="healthyBedrooms_solution_sections">Targeted Google Ads Campaign:</span>    We restructured the existing Google Ads campaigns, focusing on high-intent keywords and optimizing ad copy to highlight the unique health benefits of Healthy Bedroom’s mattresses. We also implemented detailed audience segmentation and bid strategies to reduce costs while increasing the return on ad spend (ROAS).
                </p>
              </div>
            </div>




            <div className="col-lg-4 healthyBedrooms_div_solution p-0 m-auto">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico3.src} alt="Optimized" className="callarrow" />
                <p className="p_healthy_solution">
                  {" "}
                  <span className="healthyBedrooms_solution_sections">Optimized Landing Pages:</span>To improve both SEO and Google Ads performance, we created dedicated landing pages designed to increase engagement and conversion rates, ensuring a seamless user experience that aligned with customer search queries.
                </p>
              </div>
            </div>



           

            
            
          </div>

          
        
      </div>
    </>
  );
}

export default Solution;
