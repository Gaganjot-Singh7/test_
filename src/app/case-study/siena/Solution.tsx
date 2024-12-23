import React from "react";
import callico1 from "../../../../public/img/callneedsico1.png";
import callico2 from "../../../../public/img/callneedsico2.png";
import callico3 from "../../../../public/img/callneedsico3.png";
import callico4 from "../../../../public/img/callneedsico4.png";
import "./Solution.css";
function Solution() {
  return (
    <>
      <div className="bgBlack container-fluid siena_Solution_section poppins">
        
          <div className="  solution_part_heading">
            <div className="solution_siene_heading">
            <h2 className=" solution_title"> Solutions</h2>
            {/* <img src="/detailpage/Solution_underline.svg" alt=""  className="siena_solution_underline"/> */}
            
            </div>
            <p className="mx-auto  siena_solution_para ">
            To address these challenges, we implemented a comprehensive SEO strategy
            </p>
          </div>

          <div className="row siena_div">
            <div className="col-lg-3 siena_div_solution ">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico1.src} alt="Keyword"  />
                <p>
                  <span className="siena_solution_sections">Keyword Research and Optimization:</span>   We conducted thorough keyword research to identify the most relevant and high-volume keywords for home décor, furniture, and rugs. These keywords were strategically integrated into the website’s content, meta descriptions, and headers.
                </p>
              </div>
            </div>
            <div className="col-lg-3 siena_div_solution">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico2.src} alt="SEO"  />{" "}
                <p>
                  {" "}
                  <span className="siena_solution_sections">On-Page SEO Improvements: </span>   We optimized Siena Homes' website by enhancing title tags, meta descriptions, and alt text for images. We also restructured internal linking and improved the user experience to make the site more SEO-friendly.
                </p>
              </div>
            </div>
            <div className="col-lg-3 siena_div_solution">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico3.src} alt="Content"  />{" "}
                <p>
                  {" "}
                  <span className="siena_solution_sections">Content Creation:</span>  To support SEO efforts, we developed high-quality blog content focused on home décor trends, furniture buying guides, and styling tips. This content was crafted to attract traffic and engage customers.
                </p>
              </div>
            </div>

            <div className="col-lg-3 siena_div_solution">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico4.src} alt="Technical"  />{" "}
                <p>
                  {" "}
                  <span className="siena_solution_sections">Technical SEO Fixes: </span> We ensured the website's speed, mobile responsiveness, and structured data were optimized to improve rankings and user experience.
                </p>
              </div>
            </div>
            
          </div>

          
        
      </div>
    </>
  );
}

export default Solution;
