import React from 'react'
import Banner from './Banner'
import About from "./About"
import Objective from './Objective'
import Challenge from './Challenge'
import Solution from './Solution'
import Result from "./Result"
import Section_number from '../Section_number';
import PageHead from "../../../../component/PageHead";


function page() {
  const PageMeta = {
    title: "Healthy Bedroom | Hastens Mattress Online Sale Case Study",
    description:
      "Explore how Healthy Bedroom drove online sales of Hastens Mattresses with targeted strategies. Read the case study for insights into successful e-commerce tactics.",
    // canonical:canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  return (
    <>
<PageHead PageMeta={PageMeta}/>
    <Banner/>
    <About title="About Healthy Bedroom" para="Healthy Bedroom is a luxury retailer specializing in premium mattresses designed to promote better sleep and overall well-being. Known for its high-quality products, Healthy Bedroom targets customers who prioritize comfort and health in their sleep environment."/>
    <Objective/>
    <Challenge img="/healthy/Challenges.svg" para="Healthy Bedroom faced several challenges" li_1="Highly Competitive Market" li_2="The luxury mattress industry is filled with established brands dominating both organic and paid search results, making it difficult to stand out" li_3="Low Brand Awareness" li_4="Despite offering premium products, Healthy Bedroom lacked strong brand recognition, limiting its ability to compete with larger, well-known brands" li_5="Underperforming Google Ads Campaigns" li_6="Previous attempts at Google Ads had delivered poor results, with high costs per click (CPC) and low conversion rates"/>
    <Solution/>
    <Result para="The SEO campaign delivered significant improvements for
              healthyBedrooms Homes"  li_heading_1="35% increase"  li_heading_2="50% improvement" li_heading_3="25% growth" li_heading_4="Stronger brand presence"   li_data_1="in organic traffic, with a noticeable boost in search engine
                  rankings for key mattress-related terms." li_data_2="in Google Ads conversion rates, while reducing the cost per
                  click (CPC) by 20%." li_data_3="in overall online sales, driven by a combination of better
                  visibility and more efficient ad spend." li_data_4="in the luxury mattress market, with more customers discovering
                  Healthy Bedroom through both organic and paid channels."   li_img_1="/healthy/increase.svg" li_img_2="/healthy/improvement.svg" li_img_3="/healthy/growth.svg" li_img_4="/healthy/Stronger.svg"/>
    <Section_number/>
   
    </>
  )
}

export default page