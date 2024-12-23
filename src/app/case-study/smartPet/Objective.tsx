import React from "react";
import "./Objective.css";

function Objective() {
  return (
    <>
    <div className="section_smartPet poppins">
     <div className="container-fluid">

     <div className="main_smartPet_detail_page">
     <div className="smartPet_detail_page_section_one">

     <h2 className=" smartPet_h2_obj">Objectives</h2>
     {/* <img src="/img/underline.png" alt="" className="sp_obj_line" /> */}

<p className="smartPet_obj_par">
  {" "}
  The primary goal for Smart Pet Depot was to increase brand awareness and drive sales both online and in-store. Specific objectives included:
</p>

<ul className="smartPet_ul">
  <li className="smartPet_li_data">
    <div className="d-flex">
      <span className="li_image">
        <img src="/detailpage/li.png" alt="social"  />
      </span>
      <div className="smartPet_li_points_data">
        {" "}
        Growing social media engagement and followers.
      </div>
    </div>
  </li>
  <li className="smartPet_li_data">
    <div className="d-flex">
      <span className="li_image">
        <img src="/detailpage/li.png" alt="website"  />
      </span>
      <div className="smartPet_li_points_data">
      Improving website traffic and search engine rankings through SEO.
      </div>
    </div>
  </li>
  <li className="smartPet_li_data">
    <div className="d-flex">
      <span className="li_image">
        <img src="/detailpage/li.png" alt="visibility"  />
      </span>
      <div className="smartPet_li_points_data">
      Increasing visibility in local searches to attract nearby customers.
      </div>
    </div>
  </li>

  <li className="smartPet_li_data">
    <div className="d-flex">
      <span className="li_image">
        <img src="/detailpage/li.png" alt="sales"  />
      </span>
      <div className="smartPet_li_points_data">
        {" "}
        Boosting sales through targeted paid advertising.
      </div>
    </div>
  </li>

 
</ul>
     </div>
     <div className="smartPet_detail_page_section_two">


     <img src="/smartPet/objective.svg" className="img_obj_inner" alt="objective" />
     </div>
     </div>

     </div>
     </div>
    </>
  );
}

export default Objective;
