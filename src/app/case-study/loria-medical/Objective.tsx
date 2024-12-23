import React from "react";
import "./Objective.css";
import Image from "next/image";

function Objective() {
  return (
    <>
      <div className=" container-fluid bgblack d-flex justify-content-center ">
        <div className="Objective ">
          <div className="objective_heading">
            <h2 className=" h2_obj">Objectives</h2>
            {/* <img src="/img/underline.png" alt="" className="loria_obj_line" /> */}
          </div>

          <p className="obj_par">
            The primary objective of the Meta Ads campaign and generate more
            qualified leads, and enhance brand awareness for their revolutionary
            male enhancement procedures. Specifically, Dr. Loria wanted to:
          </p>

          <ul className="loria_ul">

            <li className="li_data">
              <div className="li_data_child">
                <img src="/detailpage/li.svg" alt="Facebook" className="li_data_img" />
                <div className="li_data_data">
                  <h6>Create and Optimize a Facebook Account:</h6>
                  <p className="li_des">
                    Establish a new Facebook account for Loria Medical of
                    Orlando, ensuring it is fully optimized with relevant
                    information, including service descriptions, contact
                    details, and engaging visuals. This will serve as the
                    foundation for building the brand's social media presence.
                  </p>
                </div>
              </div>
            </li>


            <li className="li_data">
              <div className="li_data_child">
                <img src="/detailpage/li.svg" alt="Graphics" className="li_data_img" />
                <div className="li_data_data">
                  <h6>Share Graphics Regularly:</h6>
                  <p className="li_des">
                  Develop and share eye-catching graphics on the Facebook page
                consistently to promote Dr. Loria's innovative male enhancement
                procedures. This includes informative posts, promotional
                content, and educational materials that comply with Meta's
                advertising policies.
                  </p>
                </div>
              </div>
            </li>




            <li className="li_data">
              <div className="li_data_child">
                <img src="/detailpage/li.svg" alt="Reviews" className="li_data_img" />
                <div className="li_data_data">
                  <h6>Share Reviews and Testimonials:</h6>
                  <p className="li_des">
                  Actively share positive reviews and testimonials from satisfied
                clients to build trust and credibility within the community.
                This strategy aims to create a supportive environment where
                potential clients feel encouraged to seek consultations and
                guidance regarding their needs.
                  </p>
                </div>
              </div>
            </li>




            <li className="li_data">
              <div className="li_data_child">
                <img src="/detailpage/li.svg" alt="Generate" className="li_data_img" />
                <div className="li_data_data">
                  <h6>Run Meta Ads to Generate Leads:</h6>
                  <p className="li_des">
                  Develop and execute targeted Meta Ads campaigns aimed at
                generating qualified leads for Dr. Loria's male enhancement
                procedures. This includes crafting compelling ad copy and
                visuals that comply with Meta's advertising policies, targeting
                specific demographics interested in these services to drive
                traffic to the website and encourage consultation bookings.
                  </p>
                </div>
              </div>
            </li>


            
         
          </ul>
        </div>
        <div className="Objective_sec   ">
          <div className="img_obj  ">
            <img
              src="/detailpage/objective.png"
              className="img_obj_inner my-auto  "
              alt="objective"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Objective;
