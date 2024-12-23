"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../../component/header";
import radialLeft from "../../../public/img/radial-left.svg";
import Link from "next/link";

import radialBg from "../../../public/img/radial_bg.svg";

import Typewriter from "typewriter-effect";
import Footer from "../../../component/footer";
import "./Scroll.css";
import Request from "../request-form";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import PageHead from "../../../component/PageHead";

export default function Portfolio() {
  const obj = {
    Vip: {
      img: "case/vip.png",
      title: "VIP Number Shop / WORDPRESS / B2B",
      des: "By combining SEO, social media marketing, paid ads, influencer campaigns, and push notifications, VIP Number Shop successfully increased...",
      button: "Read case study",
      next_link: "/case-study/Vip",
    },
    LoriaMedical: {
      img: "case/loria.png",
      title: "Loria Medical / WORDPRESS / B2B",
      des: "The Partnership Between Loria Medical and our Meta Ads Campaign Strategy resulted in increased Visibility and tangible Growth in Patient Consultations... ",
      button: "Read case study",
      next_link: "/case-study/loria-medical",
    },
    TheGrillFather: {
      img: "case/grill.png",
      title: "The Grill Father / WORDPRESS / B2B",
      des: "By implementing a cohesive digital marketing strategy that included social media marketing, SEO, local SEO, and paid ads...",
      button: "Read case study",
      next_link: "/case-study/grill",
    },
    SmartPetDepot: {
      img: "case/Pet.png",
      title: "Smart Pet Depot / WORDPRESS / B2B",
      des: "Smart Pet Depot successfully enhanced its online presence and significantly increased sales through a well-rounded digital marketing...",
      button: "Read case study",
      next_link: "/case-study/smartPet",
    },
    TechCity: {
      img: "case/techcity.png",
      title: "TechCity / WORDPRESS / B2B",
      des: "TechCity successfully enhanced its online presence and attracted more customers with our comprehensive...",
      button: "Read case study",
      next_link: "/case-study/techcity",
    },
    SienaHome: {
      img: "case/home.png",
      title: "Siena Home / WORDPRESS / B2B",
      des: "Through strategic SEO efforts, Siena Homes successfully enhanced its online presence in the highly competitive home décor...",
      button: "Read case study",
      next_link: "/case-study/siena",
    },
    HealthyBedrooms: {
      img: "case/healthyBedrooms.jpg",
      title: "Healthy Bedrooms / WORDPRESS / B2B",
      des: "By combining an effective SEO strategy with optimized Google Ads campaigns, Healthy Bedroom was able to overcome tough competition in the luxury mattress space. The result was increased visibility, higher conversions, and a solid boost in online sales.",
      button: "Read case study",
      next_link: "/case-study/healthyBedrooms",
    },
  };

  const PageMeta = {
    title: "CaseStudies | View CaseStudy Now | Base2Brand India ",
    description:
      "Discover Base2Brand India's success through our Casestudies. View our impactful work that drives digital excellence. Explore now to see our achievements!",
    // canonical:canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        const modalBody = document.querySelector(".request-form");
        if (modalBody) {
          modalBody.classList.add("transformAnim");
        }
      }, 200);
    }
  }, [showModal]);

  // ];

  return (
    <>
      <PageHead PageMeta={PageMeta} />

      <div
        className="service-banner b2b-black-bg poppins"
        style={{
          backgroundImage: `url(${radialBg.src})`,
          backgroundRepeat: "no-repeat",
          paddingTop: "1rem",
        }}
      >
        <div className="container-fluid ">
          <div className="row flex-wrap align-items-center m-auto setHeight ">
            <div
              className="col-12 col-sm-12 col-md-7   "
              data-aos="fade-up"
            >
              <h1 className=" mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase ">
                Case Studies
              </h1>
              <p className="text-white col-12 col-sm-12 col-md-10 case_para">
                Discover how our tailored solutions have transformed businesses
                across various industries. Explore real-world case studies that
                showcase our expertise,innovative strategies, and measurable
                results, helping clients achieve their goals and drive long-term
                success
              </p>
              <div className="service-btn d-flex flex-wrap mt-3 w-100">
                <button
                  className="b2b-btn b2b-btn-lg m-0"
                  onClick={toggleModal}
                >
                  Request a Quote
                </button>
              </div>
            </div>
            <div
              className="img_case col-12 col-sm-12 col-md-5 d-flex flex-wrap align-items-center justify-content-end justify-content-center p-0"
              data-aos="fade-up"
            >
              <img src="/case/banner.png" alt="banner" />
            </div>
          </div>
        </div>
      </div>

      <div className="work_bg ">
        <div className="work-gallery ">
          <div className="w-100 pt-1 ">
            <div className="col-md-7 text-center text-white mt-5 m-auto px-5 ">
              <h2 className="text-capitalize b2b-heading">
                Developing Custom, Scalable, And Next-Generation Mobile Apps
              </h2>
            </div>
            <div className="col-12 ">
              {/* Obj Div */}
              <div className="container  ">
                <ul
                  className="nav nav-pills mb-3 caseTabs justify-content-center gap-5 nav_ul"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active btn_portfolio"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link btn_portfolio"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Design
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link btn_portfolio"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Development
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link btn_portfolio"
                      id="pills-disabled-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-disabled"
                      type="button"
                      role="tab"
                      aria-controls="pills-disabled"
                      aria-selected="false"
                    >
                      Marketing
                    </button>
                  </li>
                </ul>

                <div className="tab-content text-light" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active "
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="row mt-5  justify-content-center  all ">
                      {Object.keys(obj).map((key) => {
                        let data = obj[key];
                        console.log("description", data.des);

                        return (
                          
                         <div className=" item col-sm-12 col-md-6 col-lg-3 col-xl-4 mb-5  ">
                          <Link href={data.next_link} className="">
                            <div className="item_main  hoverGradient blueGD">
                              <img src={data.img} alt="all" />
                              <div className="img_des">
                                <h3 className="title_obj hover_impact">
                                  {data.title}
                                </h3>
                                <p className="title_obj_des">{data.des}</p>
                                <div className="button ">
                                  <Link href={data.next_link}>
                                    <button className="parent hover_impact ">
                                      {data.button}{" "}
                                      <span className="button_arrow">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="21"
                                          viewBox="0 0 21 21"
                                          width="21"
                                        >
                                          <g
                                            fill="none"
                                            fill-rule="evenodd"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            transform="translate(6 6)"
                                          >
                                            <path d="m8.5 7.5v-7h-7" />
                                            <path d="m8.5.5-8 8" />
                                          </g>
                                        </svg>
                                      </span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            </Link>
                          </div>
                          
                        );
                      })}
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="row mt-5 justify-content-center Web Design">
                      {Object.keys(obj).map((key) => {
                        let data = obj[key];
                        console.log("description", data.des);

                        return (
                         
                          <div className=" item col-sm-12 col-md-6 col-lg-3 col-xl-4 mb-5 ">
                             <Link href={data.next_link}>
                            <div className="item_main  hoverGradient blueGD">
                              <img src={data.img} alt="Design" />
                              <div className="img_des">
                                <h3 className="title_obj hover_impact">
                                  {data.title}
                                </h3>
                                <p className="title_obj_des">{data.des}</p>
                                <div className="button ">
                                  <Link href={data.next_link}>
                                    <button className="parent hover_impact ">
                                      {data.button}{" "}
                                      <span className="button_arrow">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="21"
                                          viewBox="0 0 21 21"
                                          width="21"
                                        >
                                          <g
                                            fill="none"
                                            fill-rule="evenodd"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            transform="translate(6 6)"
                                          >
                                            <path d="m8.5 7.5v-7h-7" />
                                            <path d="m8.5.5-8 8" />
                                          </g>
                                        </svg>
                                      </span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            </Link>
                          </div>
                         
                        );
                      })}
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div className="row mt-5 justify-content-center Mobile-App-Design">
                      {Object.keys(obj).map((key) => {
                        let data = obj[key];
                        console.log("description", data.des);

                        return (

                          <div className=" item col-sm-12 col-md-6 col-lg-3 col-xl-4 mb-5 ">
                                                      <Link href={data.next_link}>
                            <div className="item_main  hoverGradient blueGD">
                              <img src={data.img} alt="development" />
                              <div className="img_des">
                                <h3 className="title_obj hover_impact">
                                  {data.title}
                                </h3>
                                <p className="title_obj_des">{data.des}</p>
                                <div className="button ">
                                  <Link href={data.next_link}>
                                    <button className="parent hover_impact ">
                                      {data.button}{" "}
                                      <span className="button_arrow">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="21"
                                          viewBox="0 0 21 21"
                                          width="21"
                                        >
                                          <g
                                            fill="none"
                                            fill-rule="evenodd"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            transform="translate(6 6)"
                                          >
                                            <path d="m8.5 7.5v-7h-7" />
                                            <path d="m8.5.5-8 8" />
                                          </g>
                                        </svg>
                                      </span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            </Link>
                          </div>
                        
                        );
                      })}
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-disabled"
                    role="tabpanel"
                    aria-labelledby="pills-disabled-tab"
                  >
                    <div className="row mt-5 justify-content-center">
                      {Object.keys(obj).map((key) => {
                        let data = obj[key];
                        console.log("description", data.des);

                        return (
                          
                          <div className=" item col-sm-12 col-md-6 col-lg-3 col-xl-4 mb-5 ">
                            <Link href={data.next_link}>
                            <div className="item_main  hoverGradient blueGD">
                              <img src={data.img} alt="marketing" />
                              <div className="img_des">
                                <h3 className="title_obj hover_impact">
                                  {data.title}
                                </h3>
                                <p className="title_obj_des">{data.des}</p>
                                <div className="button ">
                                  <Link href={data.next_link}>
                                    <button className="parent hover_impact ">
                                      {data.button}{" "}
                                      <span className="button_arrow">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="21"
                                          viewBox="0 0 21 21"
                                          width="21"
                                        >
                                          <g
                                            fill="none"
                                            fill-rule="evenodd"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            transform="translate(6 6)"
                                          >
                                            <path d="m8.5 7.5v-7h-7" />
                                            <path d="m8.5.5-8 8" />
                                          </g>
                                        </svg>
                                      </span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            </Link>
                          </div>
                          
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </>
  );
}
