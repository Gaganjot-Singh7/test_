import React from 'react'
import Banner from './Banner'
import About from './About'
import Objective from './Objective'
import Challenge from './Challenge'
import Solution from "./Solution"
import Result from "./Result"
import PageHead from "../../../../component/PageHead";
import Section_number from '../Section_number'
function page() {


  const PageMeta = {
    title: "Techcity Repair | Local SEO Case Study",
    description:
      "See how Techcity Repair boosted local visibility and attracted more customers with effective local SEO strategies. Read the case study for proven results.",
    // canonical:canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };

  return (
 <>
 <PageHead PageMeta={PageMeta}/> 
 <Banner/>
 <About/>
 <Objective/>
 <Challenge/>
 <Solution/>
 <Result/>
 <Section_number/>
 </>
  )
}

export default page