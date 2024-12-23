import React from "react";
import "./Result.css";
import "../gradient.css";
function Result() {
  return (
    <>
      <div className="grill_final poppins">
        <div className="container-fluid">
          <div className="final_heading">
            <h2>Results</h2>
            {/* <img src="/img/underline.png" alt="" className="g_result_line"/> */}
            <p>
              The digital marketing strategy delivered exceptional results for
              The Grill Father
            </p>
          </div>

          <div className="final_images poppins">
            <div className="grill_images_parent yellow_grad">
              <div className="grill_images_child">
                <img
                  src="/grill/increase.svg"
                  className="grill_child_image_inner"
                  alt="increase"
                 
                />
              </div>
              <div className="grill_images_child_desc">
              <p className="grill_child_des">
                  <span className="grill_child_image_heading">40% increase</span>  in social media engagement, with significant growth in followers and post interactions.
                </p>
              </div>
            </div>

            <div className="grill_images_parent purple_grad">
              <div className="grill_images_child">
                <img
                  src="/grill/growth.svg"
                  className="grill_child_image_inner"
                  alt="growth"
                  
                />
              </div>
              <div className="grill_images_child_desc">
              <p className="grill_child_des">
                  <span className="grill_child_image_heading">50% growth</span>  in organic website traffic, driven by improved SEO efforts.
                </p>
              </div>
            </div>

            <div className="grill_images_parent sky_grad">
              <div className="grill_images_child">
                <img
                  src="/grill/rise.svg"
                  className="grill_child_image_inner"
                  alt="rise"
                  
                />
              </div>
              <div className="grill_images_child_desc">
              <p className="grill_child_des">
                  <span className="grill_child_image_heading">30% rise</span>  in local foot traffic due to enhanced local SEO and optimized Google My Business listings.
                </p>
              </div>
            </div>

            <div className="grill_images_parent red_grad">
              <div className="grill_images_child">
                <img
                  src="/grill/boost.svg"
                  className="grill_child_image_inner"
                  alt="boost"
                  
                />
              </div>
              <div className="grill_images_child_desc">
                
                <p className="grill_child_des">
                  <span className="grill_child_image_heading">25% boost</span> in online orders and in-store visits, thanks to targeted paid ad campaigns and effective promotions.
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
