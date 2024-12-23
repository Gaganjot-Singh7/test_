import React from "react";
import "./Objective.css";

function Objective() {
  return (
    <>
    <div className="section_siena">
     <div className="container-fluid">

     <div className="main_siena_detail_page">
     <div className="siena_detail_page_section_one">

     <h2 className=" siena_h2_obj">Objectives</h2>
     {/* <img src="/img/underline.png" alt=""  className="s_obj_line"/> */}

<p className="siena_obj_par">
  {" "}
  The main objectives for Siena Homes included:
</p>

<ul className="siena_ul">
  <li className="siena_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt="li"  />
      </span>
      <div className="siena_li_points_data">
        {" "}
        Boosting organic website traffic by attracting more visitors to the site through search engines, with the goal of increasing sales for their wide range of home décor, furniture, and rugs. This involved driving targeted traffic that is more likely to convert into paying customers.
      </div>
    </div>
  </li>
  <li className="siena_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt="li"  />
      </span>
      <div className="siena_li_points_data">
      Improving search engine rankings for high-impact and relevant keywords within the competitive home décor and furniture industry. By ranking higher for terms like "luxury home décor" and "modern furniture," Siena Homes aimed to increase their visibility and outshine competitors.
      </div>
    </div>
  </li>
  <li className="siena_li_data">
    <div className="d-flex">
      <span>
        <img src="/detailpage/li.png" alt="li"  />
      </span>
      <div className="siena_li_points_data">
      Enhancing online visibility to position Siena Homes as a trusted and leading destination for stylish, high-quality home products. By building a stronger online presence, the brand sought to become top-of-mind for customers seeking home décor and furniture solutions.
      </div>
    </div>
  </li>

  

 
</ul>
     </div>
     <div className="siena_detail_page_section_two">


     <img src="/siena/Objective.svg" className="img_obj_inner" alt="li" />
     </div>
     </div>

     </div>
     </div>
    </>
  );
}

export default Objective;
