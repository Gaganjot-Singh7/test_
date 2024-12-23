
import React from "react";
// import Typewriter from "typewriter-effect";
import "./callcenter.css"
import customerbanner1 from "../../public/img/customerbanner1.jpeg"
import radialBg from '../../public/img/radial_bg.svg';
export default function HomeBanner() {


  return ( 
    <>
      <div className="bannerSection pt-md-5 pt-3 pb-md-5 pb-1" style={{ backgroundImage: `url(${radialBg.src})`, backgroundRepeat: 'no-repeat' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="typewriterWrap d-flex align-items-center gap-2 callc_banner_animation">
                <h1 className="sub_heading ">Customer Support Services By</h1>
                <div>
                    <span className="anima_text" >Base2Brand</span> 
                </div>
              </div>
              <p className="sub_text text-white mt-4 call_cen_textban">
                At Base2Brand, we understand that seamless communication is key to <br />
                delivering exceptional customer experiences. That's why we offer top-notch Call <br />
                Center services to help businesses streamline their customer interactions, <br />
                improve satisfaction, and foster stronger relationships.
              </p>
              <div className="mt-4">
                <button
                  // onClick={toggleModal}
                  className="b2b-btn b2b-btn-sm  m-0"
                >
                  Request a Quote
                </button>
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center">
              <img src={customerbanner1.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

