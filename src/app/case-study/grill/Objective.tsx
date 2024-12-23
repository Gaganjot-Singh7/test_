import React from "react";
import "./Objective.css";

function Objective() {
  return (
    <>
    <div className="section_grill poppins">
     <div className="container-fluid">

     <div className="main_grill_detail_page">
     <div className="grill_detail_page_section_one">

     <div className="g_obj_section ">
     <h2 className=" grill_h2_obj">Objectives</h2>
     {/* <img src="/img/underline.png" className="g_obj_line" alt=""  /> */}
     </div>

<p className="grill_obj_par">
  {" "}
  The main goal for The Grill Father was to increase online and in-store sales by improving their online visibility. Specifically, they aimed to:
</p>

<ul className="grill_ul">
  <li className="grill_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt="awareness"  />
      </span>
      <div className="grill_li_points_data">
        {" "}
        Boost brand awareness and engagement on social media.
      </div>
    </div>
  </li>
  <li className="grill_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt="traffic"  />
      </span>
      <div className="grill_li_points_data">
      Improve organic website traffic through SEO optimization.
      </div>
    </div>
  </li>
  <li className="grill_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt="Drive"  />
      </span>
      <div className="grill_li_points_data">
      Drive more local foot traffic through local SEO.
      </div>
    </div>
  </li>

  <li className="grill_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt="Increase"  />
      </span>
      <div className="grill_li_points_data">
        {" "}
        Increase conversions using targeted paid ads.
      </div>
    </div>
  </li>

 
</ul>
     </div>
     <div className="grill_detail_page_section_two">


     <img src="/grill/objective.svg" className="img_obj_inner" alt="objective" />
     </div>
     </div>

     </div>
     </div>
    </>
  );
}

export default Objective;
