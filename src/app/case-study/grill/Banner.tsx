import React from 'react'
import "./Banner.css";
import radialBg from '../../../../public/img/radial_bg.svg'; 

function Banner() {
  return (
    <>
     <div className="container-fluid mx-auto grill_banner poppins" style={{backgroundImage: `url(${radialBg.src})`,backgroundRepeat: 'no-repeat'}}>
              <div className="row m-0 position-relative align-items-center text-white pt-md-5 pt-0 justify-content-center gap-3">
                <div
                  className="col-12 col-sm-12 col-md-5 bannerContent p-0"
                  data-aos="fade-up-left"
                >
                  <h2 className="b2b-sub-headings-bold-grill ">
                  Boosting The <span className="grill_detail_banner">Grill Father's</span> Burger Sales through Targeted Digital Marketing
                   
                  </h2>
                </div>
                <div
                  className="col-12 col-sm-12 col-md-6 img_detail p-0"
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                >
                  {/* <DotLottieReact
                  src="/json/careerbanner.json"
                  loop
                  autoplay
                  className="animated-imgs  animated-banner-img"
                /> */}
                  <img
                    className="rounded img_inner"
                    src="/grill/banner.svg"
                    alt="banner"
                  />
                </div>
              </div>
            </div>
    </>
  )
}

export default Banner