"use client";
import Objective from "./Objective"
import React, { useEffect, useState, useRef } from "react";
  // import Header from "../../../../../component/header";
  // import About1 from "../../../public/career-img/about.svg";
import DetailpageLayout from "./Layout";
import "./detail.css";
import "../gradient.css"
// import Request from "../request-form";
import radialBg from "../../../../public/img/radial_bg.svg";
import Challenge from "./Challenge"
import Final from "./Final"
import Img1 from "../../../../../public/career-img/img1.svg";
import Img2 from "../../../../../public/career-img/img2.svg";
import Img3 from "../../../../../public/career-img/img3.svg";
import Img4 from "../../../../../public/career-img/img4.svg";
import Img5 from "../../../../../public/career-img/img5.svg";
import Img6 from "../../../../../public/career-img/img6.svg";
import Img7 from "../../../../../public/career-img/img7.svg";
import Img8 from "../../../../../public/career-img/img8.svg";
import Img9 from "../../../../../public/career-img/img9.svg";
import Img10 from "../../../../../public/career-img/img10.svg";
import Img11 from "../../../../../public/career-img/img11.svg";
import Img12 from "../../../../../public/career-img/img12.svg";
import Img13 from "../../../../../public/career-img/img13.svg";
import Img14 from "../../../../../public/career-img/img14.svg";
import Solution from "./Solution"
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import Slider from "react-slick";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import radialRight from "../../../../../public/img/radial-bg-right1.svg";
import Section_number from "../Section_number";
import Posts from "./Posts"
import PageHead from "../../../../component/PageHead";
function page() {
  const PageMeta = {
    title: "Loria Medical | Meta Ads Case Study | Zero to 300+ Leads",
    description:
      "See how Loria Medical generated 300+ leads using Meta Ads. Learn the strategy behind this successful campaign and how it drove business growth.",
    // canonical:canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  return (
    <>
    <PageHead PageMeta={PageMeta}/>
      <DetailpageLayout>
        <div className="pt-0 pb-0 b2b-black-bg poppins">
          <div
            className="about-mask pt-0"
            style={{
              backgroundImage: `url(${radialBg.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <div className="crew-wrap"> */}
            <div className="container-fluid mx-auto">
              <div className="row m-0 position-relative align-items-center text-white pt-md-5 pt-0 justify-content-center gap-3">
                <div
                  className="col-12 col-sm-12 col-md-5 bannerContent p-0"
                  data-aos="fade-up-left"
                >
                  <h2 className=" detail_heading">
                    Started from Scratch: From Zero to{" "}
                    <span className="detail_banner">300+</span> Quality Leads in
                    a Month with Meta Ads
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
                    className="rounded img_inner loria_banner"
                    src="/detailpage/banner.png"
                    alt="banner"
                  />
                </div>
              </div>

              <div className="crew-wrap mt-5">
                <div className="row justify-content-center mt-5">
                  <div className="col-md-12 mx-auto text-center text-white mb-5 check">
                    <div className="about_loria_underline text-center">
                    <h1
                      className="b2b-sub-heading_loria-bold text-uppercase loria_heading"
                      data-aos="fade-up"
                    >
                      About Loria Medical
                    </h1>
                    {/* <img src="/img/underline.png" alt=""  className="loria_about_underline" /> */}
                    </div>

                    <p data-aos="fade-up" className="aboutloria_para">
                      Loria Medical, led by Dr. Victor Loria, the world’s most
                      experienced male enhancement permanent filler expert, is a
                      well-established name in the field of male enhancement
                      procedures. With over two decades of experience, Dr. Loria
                      specializes in non-surgical penile enhancement and is now
                      expanding into lengthening procedures. As a leader in his
                      industry, Dr. Loria aimed to expand his patient base and
                      raise awareness of his pioneering techniques through Meta
                      advertising.
                    </p>
                  </div>

                  {/* <div
                    className="col-md-3 col-6 mb-5 "
                    data-aos="zoom-in-up"
                    data-aos-delay="100"
                  >
                    <div className=" d-flex justify-content-center ">
                      <div className="sub_img">
                        <div className="img_parent">
                            <img src="detailpage/bargraph.png" alt="" />
                        </div>
                        <h4 className="text-white loria_img_des">
                          300+ increase in consultation bookings
                        </h4>
                      </div>

                      <img src="detailpage/arrow.png" alt="" />

                      <div className="sub_img">
                        <div className="img_parent">
                            <img src="detailpage/decreaseBar.png" alt="" />
                        </div>
                        <h4 className="text-white loria_img_des">
                          30% reduction in Cost-Per-Lead (CPL)
                        </h4>
                      </div>

                      <img src="detailpage/arrow.png" alt="" />

                      <div className="sub_img">
                        <div className="img_parent">
                            <img src="detailpage/speaker.png" alt="" />
                        </div>
                        <h4 className="text-white loria_img_des">
                          90%+ Brand Awareness
                        </h4>
                      </div>
                    </div>
                  </div>*/}

                  <div className="img_Section" data-aos="fade-up-left">
                    <div className="div_flex">
                      <div className="img_parent sky_grad">
                        <div className="img">
                          <img src="/detailpage/bargraph.png" alt="bargraph"  data-aos="flip-left" className="img_loria_about"/>
                        </div>
                        <div className="img_des_data text-white">
                         <span className="span_color"> 300+ increase</span> in consultation bookings
                        </div>
                      </div>
                      {/* <div className="arrow">
                       <img src="/detailpage/arrow.png" alt="arrow" />                     
                      </div> */}
                      <div className="img_parent red_grad">
                        <div className="img" >
                          <img
                            src="/detailpage/decreaseBar.png" data-aos="flip-left"
                            alt="decreaseBar"
                             className="img_loria_about"
                          />
                        </div>
                        <div className="img_des_data text-white ">
                          <span className="span_color ">30% reduction</span> in Cost-Per-Lead (CPL)
                        </div>
                      </div>
                      {/* <div className="arrow">
                      <img src="/detailpage/arrow.png" alt="arrow" />
                      </div> */}
                      <div className="img_parent purple_grad">
                        <div className="img">
                          <img src="/detailpage/speaker.png" alt="speaker"  data-aos="flip-left" className="img_loria_about"/>
                        </div>
                        <div className="img_des_data text-white"><span className="span_color">90%+</span> Brand Awareness </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       <Objective/>
       <Challenge/>
       <Solution/>
       <Final/>
       <Posts/>
        <Section_number />
      </DetailpageLayout>
    </>
  );
}

export default page;
