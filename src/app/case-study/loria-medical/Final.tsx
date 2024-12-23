import React from "react";
import "./Final.css";
import "../gradient.css"
import data2 from "../../../../../public/detailpage/data2.svg"
import Image from "next/image";
import { data } from "jquery";
function Final() {
  return (
    <>
      <div className="bgBlack Final_section poppins">
        <div className="container-fluid  ">
          <div className="loria_heading text-center">
            <h2 className=" final_title"> The Final Results</h2>
            {/* <img
              img
              src="/img/underline.png"
              alt=""
              
              className="loria_result_underline "
            /> */}
          </div>
          <p className="mx-auto  final_para ">
            Our Meta Ads campaign delivered outstanding results for Loria
            Medical, significantly boosting brand visibility and lead
            generation. The key outcomes were:
          </p>

          <div className="final_section_two  ">
            <div className="section_two_parent red_grad">
              <div className="section_two_img">
                <img src="/detailpage/magnet.png" alt="magnet" />
              </div>
              <h6>Lead Generation</h6>
              <p className="section_two_para">
                The campaign generated a 50% increase in consultation bookings
                within the first three months, with a noticeable spike in
                inquiries about the new lengthening procedures.
              </p>
            </div>

            <div className="section_two_parent green_grad">
              <div className="section_two_img ">
                <img src="/detailpage/shuffle.png" alt="shuffle" />
              </div>
              <h6>Higher Engagement</h6>
              <p className="section_two_para">
                The ads achieved above-average click-through rates (CTR)
                compared to industry benchmarks, thanks to tailored messaging
                that addressed the target audience’s concerns and interests.
              </p>
            </div>

            <div className="section_two_parent sky_grad">
              <div className="section_two_img">
                <img src="/detailpage/save.png" alt="save" />
              </div>
              <h6>Cost-Effective Results</h6>
              <p className="section_two_para">
                The cost-per-lead (CPL) was reduced by 30% due to efficient
                targeting and ongoing optimization of the ads.
              </p>
            </div>
          </div>

          <div className="container-fluid img_section_solution ">
            <img
              src="/detailpage/data1.svg"
              alt="data1"
              
              className="img1"
            />
            <img
              src="/detailpage/data2.png"
              alt="data2"
              
              className="img2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Final;
