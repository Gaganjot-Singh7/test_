import React from "react";
import "./Solution.css";
import callico1 from "../../../../public/img/callneedsico1.png";
import callico2 from "../../../../public/img/callneedsico2.png";
import callico3 from "../../../../public/img/callneedsico3.png";
import callico4 from "../../../../public/img/callneedsico4.png";
function Solution() {
  return (
    <>
      <div className="bgBlack Solution_section poppins">
        <div className="container-fluid">
          <div className=" ">
            <div className="loria_solution_heading text-center">
            <h2 className=" solution_title"> Solutions</h2>
            {/* <img src="/img/underline.png" alt=""  className="loria_solution_underline "/> */}
            </div>
            <p className="mx-auto solution_para poppins ">
              We developed a comprehensive strategy to overcome these challenges
              and meet Loria Medical's goals. The approach included:
            </p>
          </div>

          <div className="row w-100 poppins m-auto">
            <div className="col-lg-3 div_solution_loria p-0">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico1.src} alt="Targeted"  />{" "}
                <p>
                  <span className="loria_solution_span">
                    Targeted Meta Ads:
                  </span>{" "}
                  Using Meta’s advanced targeting tools, we created highly
                  focused ad campaigns to reach men interested in health,
                  wellness, and cosmetic enhancements. We refined the targeting
                  based on age, location, income level, and specific interests.
                </p>
              </div>
            </div>
            <div className="col-lg-3 div_solution_loria p-0">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico2.src} alt="Messaging"  />{" "}
                <p>
                  {" "}
                  <span className="loria_solution_span">
                    {" "}
                    Creative Messaging:
                  </span>{" "}
                  We carefully crafted ad copy and visuals that addressed the
                  audience’s needs and concerns while adhering to Meta's
                  advertising guidelines. The focus was on professional,
                  discreet messaging that highlighted Dr. Loria’s expertise and
                  the permanent nature of the filler treatments.
                </p>
              </div>
            </div>
            <div className="col-lg-3 div_solution_loria p-0">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico3.src} alt="Generation"  />{" "}
                <p>
                  {" "}
                  <span className="loria_solution_span">
                    {" "}
                    Lead Generation Forms:
                  </span>{" "}
                  To simplify the consultation process, we integrated Meta’s
                  lead generation forms directly into the ads. This allowed
                  potential clients to easily request more information or
                  schedule consultations without leaving the Meta platform,
                  improving conversion rates.
                </p>
              </div>
            </div>
            <div className="col-lg-3 div_solution_loria p-0">
              {" "}
              <div className="solution_section">
                {" "}
                <img src={callico4.src} alt="Testing"  />{" "}
                <p>
                  {" "}
                  <span className="loria_solution_span">A/B Testing:</span> We continuously tested different ad creatives,
                  formats, and messages to determine what resonated best with
                  the audience. From carousel ads showcasing before-and-after
                  results to testimonial videos, every piece of content was
                  optimized for performance.
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
