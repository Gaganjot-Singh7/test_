import React from "react";
import "./Result.css";
import "../gradient.css"
function Final() {
  return (
    <>
      <div className="container-fluid  poppins p-0">
        <div className="techcity_final">
          <div className="final_heading_tech">
            <div className="text-center">
              <h2>Results</h2>
              {/* <img
                src="/img/underline.png"
                alt=""
                
                className="techcity_line"
              /> */}
            </div>

            <p>
              The digital marketing strategy delivered exceptional results for
              The Grill Father
            </p>
          </div>

          <div className="final_images">
            <div className="techcity_images_parent red_grad">
              <div className="techcity_images_child">
                <img
                  src="/techcity/increases.svg"
                  className="techcity_child_image_inner"
                  alt="increases"
                  
                />
              </div>
              <div className="techcity_images_child_desc">
                <p className="techcity_child_des">
                  <span className="techcity_child_image_heading">
                    40% increase{" "}
                  </span>
                  in social media engagement, resulting in a larger follower
                  base and higher interaction rates.
                </p>
              </div>
            </div>

            <div className="techcity_images_parent sky_grad">
              <div className="techcity_images_child">
                <img
                  src="/techcity/growth.svg"
                  className="techcity_child_image_inner"
                  alt="growth"
                  
                />
              </div>
              <div className="techcity_images_child_desc">
                <p className="techcity_child_des">
                  <span className="techcity_child_image_heading">
                    50% growth
                  </span>{" "}
                  in organic website traffic, driven by effective SEO strategies
                  and improved keyword targeting.
                </p>
              </div>
            </div>

            <div className="techcity_images_parent yellow_grad">
              <div className="techcity_images_child">
                <img
                  src="/techcity/60increase.svg"
                  className="techcity_child_image_inner"
                  alt="60increase"
                  
                />
              </div>
              <div className="techcity_images_child_desc">
                <p className="techcity_child_des">
                  <span className="techcity_child_image_heading">
                    60% increase
                  </span>
                  in local search visibility, leading to more inquiries and foot
                  traffic from the surrounding community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Final;
