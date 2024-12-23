import React from "react";
import "./Objective.css";
import Image from "next/image";
function Objective() {
  return (
    <>
      <div className="section_healthyBedrooms poppins">
        <div className="container-fluid">
          <div className="main_healthyBedrooms_detail_page">
            <div className="healthyBedrooms_detail_page_section_one">
              <div className="objective_section ">
              <h2 className=" healthyBedrooms_h2_obj m-0">Objectives</h2>
              {/* <img src="/img/underline.png" className="objective_underline"/> */}
              </div>

              <p className="healthyBedrooms_obj_par">
                {" "}
                The primary objectives for Healthy Bedroom were:
              </p>

              <ul className="healthyBedrooms_ul">
                <li className="healthyBedrooms_li_data">
                  <div className="d-flex">
                    <span>
                      <img src="/detailpage/li.png" alt="li"  />
                    </span>
                    <div className="healthyBedrooms_li_points_data">
                      {" "}
                      Increase online sales of luxury mattresses through
                      improved visibility and targeted traffic.
                    </div>
                  </div>
                </li>
                <li className="healthyBedrooms_li_data">
                  <div className="d-flex">
                    <span>
                      <img src="/detailpage/li.png" alt="li"  />
                    </span>
                    <div className="healthyBedrooms_li_points_data">
                      Boost organic search rankings for key product-related
                      terms in the competitive luxury bedding market.
                    </div>
                  </div>
                </li>
                <li className="healthyBedrooms_li_data">
                  <div className="d-flex">
                    <span>
                      <img src="/detailpage/li.png" alt="li"  />
                    </span>
                    <div className="healthyBedrooms_li_points_data">
                      Leverage Google Ads to capture highly motivated,
                      purchase-ready customers and drive immediate conversions.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="healthyBedrooms_detail_page_section_two">
              <img
                src="/healthy/Objective.svg"
                className="img_obj_inner"
                alt="Objective"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Objective;
