"use client";
import React from "react";
import radialBg from "../../../../public/img/radial_bg.svg";
import DetailpageLyout from "./Layout";
import Banner from "./Banner";
import Section_number from "../Section_number";
import Objective from "./Objective"
import Challenges from "./Challenges";
import Solution from "./Solution";
import Final from "./Final";
import About from "./About"
import PageHead from "../../../../component/PageHead";
function page() {

  const PageMeta = {
    title: "VIP Number Shop | 360° Digital Marketing Case Study",
    description:
      "Explore how VIP Number Shop boosted its online presence with 360° digital marketing strategies. Explore the case study for proven results and insights.",
    // canonical:canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };

  return (
    <>
    <PageHead PageMeta={PageMeta}/>
      <DetailpageLyout>
        <div className="pt-0 pb-0 b2b-black-bg">
          <div
            className="about-mask pt-5"
            style={{
              backgroundImage: `url(${radialBg.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Banner/>
            <About/>
            <Objective/>
            <Challenges/>
            <Solution/>
            <Final/>
       <Section_number/>

   
     
          </div>
        </div>
      </DetailpageLyout>
    </>
  );
}

export default page;
