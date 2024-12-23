import React from "react";
import "./Result.css";
import "../gradient.css"
import Image from "next/image";
function Result(props) {
  return (
    <>
      <div className="healthyBedrooms_final poppins">
        <div className="container-fluid">
          <div className="final_heading">
           
            <div className="div_result_underline text-center">
              <h2 className="healty_bedrooms_final_heading">Results</h2>
              {/* <img src="/img/underline.png" alt=""   className="result_healthyBedrooms"/> */}
            </div>
            <p>
             {props.para}
            </p>
          </div>

          <div className="final_images">
            <div className="healthyBedrooms_images_parent yellow_grad">
              <div className="healthyBedrooms_images_child">
                <img
                  src={props.li_img_1}
                  className="healthyBedrooms_child_image_inner"
                  alt="healthyBedrooms"
                   data-aos="fade-right"
                />
              </div>
              <div className="healthyBedrooms_images_child_desc">
                <p className="healthyBedrooms_child_des">
                  <span className="healthyBedrooms_child_image_heading">
                    {" "}
                    {props.li_heading_1}
                  </span>{" "}
                  {props.li_data_1}
                </p>
              </div>
            </div>

            <div className="healthyBedrooms_images_parent red_grad">
              <div className="healthyBedrooms_images_child">
                <img
                  src={props.li_img_2}
                  className="healthyBedrooms_child_image_inner"
                  alt="healthyBedrooms"
                  data-aos="fade-right"
                />
              </div>
              <div className="healthyBedrooms_images_child_desc">
                <p className="healthyBedrooms_child_des">
                  <span className="healthyBedrooms_child_image_heading">
                  {props.li_heading_2} 
                  </span>{" "}
                  {props.li_data_2}
                </p>
              </div>
            </div>

            <div className="healthyBedrooms_images_parent sky_grad">
              <div className="healthyBedrooms_images_child">
                <img
                  src={props.li_img_3}
                  className="healthyBedrooms_child_image_inner"
                  alt="healthyBedrooms"
                  data-aos="fade-up-left"
                />
              </div>
              <div className="healthyBedrooms_images_child_desc">
                <p className="healthyBedrooms_child_des">
                  <span className="healthyBedrooms_child_image_heading">
                  {props.li_heading_3} 
                  </span>{" "}
                  {props.li_data_3}
                </p>
              </div>
            </div>

            <div className="healthyBedrooms_images_parent green_grad">
              <div className="healthyBedrooms_images_child">
                <img
                  src={props.li_img_4}
                  className="healthyBedrooms_child_image_inner"
                  alt="healthyBedrooms"
                  data-aos="fade-up-left"
                />
              </div>
              <div className="healthyBedrooms_images_child_desc ">
                <p className="healthyBedrooms_child_des">
                  <span className="healthyBedrooms_child_image_heading">
                  {props.li_heading_4} 
                  </span>{" "}
                  {props.li_data_4}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
