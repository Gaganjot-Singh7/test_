import React from "react";
import "./Result.css";
import "../../gradient.css";
function Result() {
  return (
    <>
      <div className="siena_final">
        <div className="container-fluid">
          <div className="final_heading">
            <h2>Results</h2>
            <p>
              The SEO campaign delivered significant improvements for Siena
              Homes
            </p>
          </div>

          <div className="final_images">
            <div className="siena_images_parent red_grad">
              <div className="siena_images_child">
                <img
                  src="/siena/increase.svg"
                  className="siena_child_image_inner"
                  alt="increase"
                  
                />
              </div>
              <div className="siena_images_child_desc">
                <p className="siena_child_des">
                  <span className="siena_child_image_heading">
                    {" "}
                    40% increase
                  </span>{" "}
                  in organic traffic within the first three months, resulting in
                  a consistent stream of visitors to the website.
                </p>
              </div>
            </div>

            <div className="siena_images_parent ">
              <div className="siena_images_child">
                <img
                  src="/siena/ranking.svg"
                  className="siena_child_image_inner"
                  alt="ranking"
                  
                />
              </div>
              <div className="siena_images_child_desc">
                <p className="siena_child_des">
                  <span className="siena_child_image_heading">
                    Top 10 rankings
                  </span>{" "}
                  for high-priority keywords like “luxury home décor,” “modern
                  furniture,” and “designer rugs.
                </p>
              </div>
            </div>

            <div className="siena_images_parent">
              <div className="siena_images_child">
                <img
                  src="/siena/growth.svg"
                  className="siena_child_image_inner"
                  alt="growth"
                  
                />
              </div>
              <div className="siena_images_child_desc">
                <p className="siena_child_des">
                  <span className="siena_child_image_heading">50% growth</span>{" "}
                  in website engagement, with visitors spending more time
                  exploring the product pages and blog content.
                </p>
              </div>
            </div>

            <div className="siena_images_parent">
              <div className="siena_images_child">
                <img
                  src="/siena/notable.svg"
                  className="siena_child_image_inner"
                  alt="notable"
                  
                />
              </div>
              <div className="siena_images_child_desc">
                <p className="siena_child_des">
                  <span className="siena_child_image_heading">
                    Notable boost
                  </span>{" "}
                  in sales conversions from organic search traffic, contributing
                  to a higher overall revenue.
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
