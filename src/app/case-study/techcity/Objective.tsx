import React from "react";
import "./Objective.css";

function Objective() {
  return (
    <>
      <div className="section_techcity poppins">
        <div className="container-fluid">
          <div className="main_techcity_detail_page">
            <div className="techcity_detail_page_section_one">
              <div className="">
                <h2 className=" techcity_h2_obj">Objectives</h2>
                {/* <img src="/img/underline.png" alt=""  className="obj_smart_line"/> */}
              </div>

              <p className="techcity_obj_par">
                {" "}
                The primary goals for TechCity included:
              </p>

              <ul className="techcity_ul">
                <li className="techcity_li_data">
                  <div className="d-flex">
                    <span>
                      <img src="/detailpage/li.png" alt="visibility"  />
                    </span>
                    <div className="techcity_li_points_data">
                      {" "}
                      Enhancing brand awareness and visibility in the local
                      market.
                    </div>
                  </div>
                </li>
                <li className="techcity_li_data">
                  <div className="d-flex">
                    <span>
                      <img src="/detailpage/li.png" alt="traffic"  />
                    </span>
                    <div className="techcity_li_points_data">
                      Increasing organic website traffic through improved SEO.
                    </div>
                  </div>
                </li>
                <li className="techcity_li_data">
                  <div className="d-flex">
                    <span>
                      <img src="/detailpage/li.png" alt="Engaging"  />
                    </span>
                    <div className="techcity_li_points_data">
                      Engaging more effectively with customers on social media
                      platforms.
                    </div>
                  </div>
                </li>

                <li className="techcity_li_data">
                  <div className="d-flex">
                    <span>
                      <img src="/detailpage/li.png" alt="Driving"  />
                    </span>
                    <div className="techcity_li_points_data">
                      {" "}
                      Driving more foot traffic and inquiries through local SEO
                      efforts.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="techcity_detail_page_section_two">
              <img src="/techcity/obj.svg" className="img_obj_inner" alt="obj" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Objective;
