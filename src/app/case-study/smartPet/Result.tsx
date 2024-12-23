import React from "react";
import "../gradient.css"
import "./Result.css";
function Result() {
  return (
    <>
      <div className="smartPet_final poppins">
        <div className="container-fluid">
          <div className="final_heading">
            <div className="text-center">
            <h2>Results</h2>
            {/* <img src="/img/underline.png" className="result_pet_line" alt=""  /> */}
            </div>
            <p>
            The digital marketing strategy delivered exceptional results for The Grill Father
            </p>
          </div>

          <div className="final_images">
            <div className="smartPet_images_parent red_grad">
              <div className="smartPet_images_child">
                <img
                  src="/smartPet/increase.svg"
                  className="smartPet_child_image_inner"
                  alt="increase"
                  
                />
              </div>
              <div className="smartPet_images_child_desc">
              <p className="smartPet_child_des">
                  <span className="smartPet_child_image_heading">35% increase</span> in social media engagement, leading to a larger and more active follower base.
                </p>
              </div>
            </div>

            <div className="smartPet_images_parent green_grad">
              <div className="smartPet_images_child">
                <img
                  src="/smartPet/growth.svg"
                  className="smartPet_child_image_inner"
                  alt="growth"
                  
                />
              </div>
              <div className="smartPet_images_child_desc">
              <p className="smartPet_child_des">
                  <span className="smartPet_child_image_heading">45% growth</span> in organic website traffic due to improved SEO strategies.
                </p>
              </div>
            </div>

            <div className="smartPet_images_parent sky_grad">
              <div className="smartPet_images_child">
                <img
                  src="/smartPet/50increase.svg"
                  className="smartPet_child_image_inner"
                  alt="50increase"
                  
                />
              </div>
              <div className="smartPet_images_child_desc">
              <p className="smartPet_child_des">
                  <span className="smartPet_child_image_heading">50% increase</span> in local visibility, attracting more customers from nearby neighborhoods.
                </p>
              </div>
            </div>

            <div className="smartPet_images_parent yellow_grad">
              <div className="smartPet_images_child">
                <img
                  src="/smartPet/rise.svg"
                  className="smartPet_child_image_inner"
                  alt="rise"
                  
                />
              </div>
              <div className="smartPet_images_child_desc">
                
                <p className="smartPet_child_des">
                  <span className="smartPet_child_image_heading">30% rise</span> in online sales and in-store visits, driven by targeted paid advertising campaigns.
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
