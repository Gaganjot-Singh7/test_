import React from 'react'
import Banner from './Banner'
import About from "../healthyBedrooms/About"
import Objective from './Objective'
import Challenge from '../healthyBedrooms/Challenge'
import Solution from './Solution'
import Result from "../healthyBedrooms/Result"
import Section_number from '../Section_number'
import PageHead from "../../../../component/PageHead";
function page() {
  const PageMeta = {
    title: "Siena Design | SEO Case Study | 350% Increased Organic Traffic",
    description:
      "Explore how Siena Design achieved a 350% increase in organic traffic with expert SEO strategies. Read the case study for impactful results and insights.",
    // canonical:canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  return (
    <>
    <PageHead PageMeta={PageMeta}/>
    <Banner/>
    <About title="About Siena Home" para="Siena Homes is a premier online retailer specializing in home décor, furniture, rugs, and other interior design essentials. With a commitment to quality and style, Siena Homes caters to customers looking to elevate their living spaces. Despite having a beautiful collection, the company faced challenges in attracting sufficient online traffic and visibility."/>
    <Objective/>
    <Challenge img="/siena/Challenge.svg" para="Siena Homes faced several challenges" li_1="Highly Competitive Market" li_2="The home decor and furniture industry is saturated with large, well-established players dominating search results, making it difficult for Siena Homes to compete" li_3="Low Keyword Ranking" li_4="The website had limited visibility on search engines, with many relevant keywords either ranking poorly or not at all" li_5="Under-Optimized Content" li_6="The website lacked the necessary SEO optimization, including meta tags, headings, and keyword-rich content, which are crucial for improving rankings"/>
    <Solution/>
    <Result  para="The SEO campaign delivered significant improvements for Siena
              Homes"  li_heading_1="40% increase"  li_heading_2="Top 10 rankings" li_heading_3="50% growth" li_heading_4=" Notable boost"   li_data_1="  in organic traffic within the first three months, resulting in
                  a consistent stream of visitors to the website." li_data_2="for high-priority keywords like “luxury home décor,” “modern
                  furniture,” and “designer rugs." li_data_3="in website engagement, with visitors spending more time
                  exploring the product pages and blog content." li_data_4="in sales conversions from organic search traffic, contributing
                  to a higher overall revenue."   li_img_1="/siena/increase.svg" li_img_2="/siena/ranking.svg" li_img_3="/siena/growth.svg" li_img_4="/siena/notable.svg"/>
    <Section_number/>
    </>
  )
}

export default page