import React from "react";
import "./Solution.css";
import callico1 from "../../../../public/img/callneedsico1.png";
import callico2 from "../../../../public/img/callneedsico2.png";
import callico3 from "../../../../public/img/callneedsico3.png";
function Solution() {
  return (
    <>
      <div className="bgBlack techcity_Solution_section poppins">
        <div className="container-fluid">
          <div className="  solution_part_heading">
            <div className="text-center">
              <h2 className=" solution_title"> Solutions</h2>
              {/* <img
                src="/img/underline.png"
                className="t_sol_line"
                alt=""
                
              /> */}
            </div>
            <p className=" techcity_solution_para ">
              To address these challenges, we developed a focused digital
              marketing strategy for TechCity
            </p>
          </div>

          <div className="row w-100 mx-auto">
            <div className="col-lg-4 techcity_div_solution p-0">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico1.src} alt="Social"  />{" "}
                <p>
                  <span className="techcity_solution_sections">
                    Social Media Marketing:
                  </span>{" "}
                  We created engaging content for platforms such as Facebook and
                  Instagram, showcasing repair services, customer testimonials,
                  and special promotions. Regular posts and interactive content
                  helped build a community of tech enthusiasts.
                </p>
              </div>
            </div>
            <div className="col-lg-4 techcity_div_solution p-0">
              {" "}
              <div className="solution_section">
                {" "}
                {/* <img src="/detailpage/northEast.png" alt=""  />{" "} */}
                <img src={callico2.src} alt="Website"  />{" "}
                <p>
                  {" "}
                  <span className="techcity_solution_sections">
                    Website SEO:
                  </span>{" "}
                  The website was optimized for relevant keywords, including
                  “mobile phone repair,” “screen replacement,” and “TechCity
                  repairs.” Improvements were made to the website’s structure
                  and content to enhance its search engine ranking.
                </p>
              </div>
            </div>
            <div className="col-lg-4 techcity_div_solution p-0">
              {" "}
              <div className="solution_section">
                {" "}
                {/* <img src="/detailpage/northEast.png" alt=""  />{" "} */}
                 <img src={callico3.src} alt="Local"  />{" "}
                <p>
                  {" "}
                  <span className="techcity_solution_sections">
                    Local SEO:
                  </span>{" "}
                  We optimized TechCity’s Google My Business listing, ensuring
                  accurate information and encouraging customer reviews. Local
                  keywords were incorporated to boost visibility in local search
                  results.
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
