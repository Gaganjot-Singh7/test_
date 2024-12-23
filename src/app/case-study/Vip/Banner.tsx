import React from 'react'
import "./banner.css"
function Banner() {
  return (
    <>
    <div className="container-fluid mx-auto">
              <div className="row m-0 position-relative align-items-center text-white pt-md-5 pt-0 justify-content-center gap-3 banner_vip">
                <div
                  className="col-12 col-sm-12 col-md-5 bannerContent p-0"
                  data-aos="fade-up-left"
                >
                  <h2 className="b2b-sub-headings-bold-Vip ">
                  Maximizing Sales of <span className="detail_banner">VIP Mobile Numbers  </span> Through Multi-Channel Digital Marketing
                   
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
                    src="/vip/vipSales.png"
                    alt="vipSales"
                  />
                </div>
              </div>
            </div>
    </>
  )
}

export default Banner