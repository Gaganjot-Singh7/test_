"use client";

import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Request from "./request-form";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import radialBg from '../../public/img/radial_bg.svg'; 

export default function HomeBanner() {
  const [showModal, setShowModal] = useState(false);
  const strings = [
    { text: "Website", color: "#a1e31d" },
    { text: "Mobile App", color: "#396BDB" },
    { text: "Shopify Store", color: "#FF5733" },

  ];

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function () {
      const ModalBody = document.querySelector(".request-form");
      if (ModalBody) {
        ModalBody.classList.add("transformAnim");
      }
    }, 200);
  };

  return (
    <>
      <div className="bannerSection pt-md-5 pt-3 pb-md-5 pb-1" style={{backgroundImage: `url(${radialBg.src})`,backgroundRepeat: 'no-repeat'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="typewriterWrap d-flex align-items-center gap-2">
                <h1 className="sub_heading">Build Your</h1>
                <div>
                  <Typewriter
                    options={{
                      strings: strings.map(
                        (item) =>
                          `<span style="color:${item.color}">${item.text}</span>`
                      ),
                      autoStart: true,
                      loop: true,
                      delay: 75,
                    }}
                  />
                </div>
              </div>
              <h1 className="sub_heading">
              with Flawless Technology, <br /> Design and Execution
              </h1>
              <p className="sub_text text-white mt-4">
                Let&apos;s Build something Digital together, We are Leading{" "}
                <br /> Innovative Partner for Start-ups and Enterprises
              </p>
              <div className="mt-4">
                <button
                  onClick={toggleModal}
                  className="b2b-btn b2b-btn-sm  m-0"
                >
                  Request a Quote
                </button>
              </div>
            </div>
            <div className="col-md-5">
              <DotLottieReact
                src="/json/banner/home page.json"
                loop
                autoplay
                className="animated-imgs  animated-banner-img"
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </>
  );
}
