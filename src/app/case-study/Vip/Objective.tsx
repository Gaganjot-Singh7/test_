import React from "react";
import "./objective.css";

function Objective() {
  return (
    <>
     <div className="container-fluid position-sticky poppins">

     <div className="main_vip_detail_page position-sticky">
     <div className="vip_detail_page_section_one">

     <div className="vip_obj_section">
     <h2 className=" vip_h2_obj">Objectives</h2>
     {/* <img src="/img/underline.png" className="obj_underline" alt=""  /> */}
     </div>

<p className="vip_obj_par poppins">
  {" "}
  The primary objective for VIP Number Shop was to expand their
  customer base and boost sales of their VIP mobile numbers.
  Specifically, they aimed to:
</p>

<ul className="vip_ul">
  <li className="vip_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt=""  />
      </span>
      <div className="vip_li_points_data">
        {" "}
        Increase organic traffic and search rankings through SEO
        efforts.
      </div>
    </div>
  </li>
  <li className="vip_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt=""  />
      </span>
      <div className="vip_li_points_data">
        Drive engagement and inquiries through social media platforms.
      </div>
    </div>
  </li>
  <li className="vip_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt=""  />
      </span>
      <div className="vip_li_points_data">
        Maximize conversions with paid advertising on Meta and Google.
      </div>
    </div>
  </li>

  <li className="vip_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt=""  />
      </span>
      <div className="vip_li_points_data">
        {" "}
        Utilize influencer marketing to expand brand awareness among
        key demographics.
      </div>
    </div>
  </li>

  <li className="vip_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt=""  />
      </span>
      <div className="vip_li_points_data">
        {" "}
        Leverage mobile app push notifications to increase VIP number
        purchases
      </div>
    </div>
  </li>
</ul>
     </div>
     <div className="vip_detail_page_section_two">


     <img src="/vip/objective.png" className="img_obj_inner" alt="" />
     </div>
     </div>

     </div>
    </>
  );
}

export default Objective;
