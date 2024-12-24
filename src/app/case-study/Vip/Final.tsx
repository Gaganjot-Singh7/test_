import React from "react";
import "./Final.css";
import "../gradient.css";
function Final() {
  return (
    <>
      <div className="vip_final poppins">
        <div className="container-fluid">
          <div className="final_heading">
            <div className="v_final_heading_Section text-center">
            <h2 className="v_final_title">The Final Results</h2>
            {/* <img src="/img/underline.png" alt=""  className="v_final_line"/> */}
            </div>
            <p>
              The multi-channel marketing strategy for VIP Number Shop delivered
              impressive results, leading to substantial growth in sales and
              brand awareness. Key outcomes include:
            </p>
          </div>

          <div className="final_images">


            <div className="vip_images_parent red_grad">
              <div className="vip_images_child">
                <img
                  src="/vip/increase.svg"
                  className="vip_child_image_inner"
                  alt="increase"
                  
                />
              </div>
              <div className="vip_images_child_desc">
                <h5 className="vip_child_image_heading">
                  60% increase in organic traffic
                </h5>
                <p className="vip_child_des">
                  due to improved search engine rankings, particularly for
                  competitive keywords like "VIP mobile numbers.
                </p>
              </div>
            </div>


            {/* <div className="vip_images_parent_arrow"><img src="/Vip/arrow.svg" alt="arrow"  /></div> */}


            <div className="vip_images_parent sky_grad">
              <div className="vip_images_child">
                <img
                  src="/Vip/growth.svg"
                  className="vip_child_image_inner"
                  alt="growth"
                  
                />
              </div>
              <div className="vip_images_child_desc ">
                <h5 className="vip_child_image_heading">
                45% growth in social media
                </h5>
                <p className="vip_child_des">
                 engagement and a significant rise in inquiries through Facebook and Instagram.
                </p>
              </div>
            </div>



            {/* <div className="vip_images_parent_arrow"> */}
              {/* <img src="/vip/arrow.svg" alt="arrow"  /></div> */}



            <div className="vip_images_parent purple_grad">
              <div className="vip_images_child">
                <img
                  src="/vip/improvement.svg"
                  className="vip_child_image_inner"
                  alt="improvement"
                  
                />
              </div>
              <div className="vip_images_child_desc">
                <h5 className="vip_child_image_heading">
                30% improvement in conversion rates_arrow
                </h5>
                <p className="vip_child_des">
                from paid ads on Meta and Google, with a marked reduction in cost-per-click (CPC).
                </p>
              </div>
            </div>
          </div>

          <div className="final_images_second">
            
          <div className="vip_images_parent yellow_grad">
              <div className="vip_images_child">
                <img
                  src="/vip/sales.svg"
                  className="vip_child_image_inner"
                  alt="higher"
                  
                />
              </div>
              <div className="vip_images_child_desc">
                <h5 className="vip_child_image_heading">
                15% higher sales
                </h5>
                <p className="vip_child_des">
                attributed to influencer marketing campaigns that connected VIP Number Shop to a luxury-seeking audience.
                </p>
              </div>
            </div>


            {/* <div className="vip_images_parent_arrow"><img src="/Vip/arrow.svg" alt="arrow"  /></div> */}


            <div className="vip_images_parent green_grad ">
              <div className="vip_images_child ">
                <img
                  src="/vip/25_increase.svg"
                  className="vip_child_image_inner"
                  alt="increase"
                  
                />
              </div>
              <div className="vip_images_child_desc ">
                <h5 className="vip_child_image_heading">
                25% increase
                </h5>
                <p className="vip_child_des">
                in customer retention through personalized mobile app push notifications, which resulted in more repeat purchases.
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
