import Grill_layout from "./layout";
import Banner from "./Banner";
import About from "./About";
import React from "react";
import Objective from "./Objective";
import Challenge from "./Challenge";
import Solution from "./Solution";
import Section_number from "../Section_number";
import Result from "./Result";
import PageHead from "../../../../component/PageHead";

function page() {
  const PageMeta = {
    title: "The Grill Father | 360° Digital Marketing Case Study",
    description:
      "Discover how The Grill Father enhanced its online presence with 360° digital marketing. Read the case study for successful strategies and growth outcomes.",
    // canonical:canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };

  return (
    <>
      <PageHead PageMeta={PageMeta} />

      <Banner />
      <About />
      <Objective />
      <Challenge />
      <Solution />
      <Result />
      <Section_number />
    </>
  );
}

export default page;
