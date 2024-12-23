import React from 'react'
import "./Challenge.css"
import radialRight from "../../../../public/img/radial-right.svg"   
function Challenges() {
  return (
    <>

    <div className='bgBlack container_grill poppins' style={{backgroundImage: `url(${radialRight.svg})`,backgroundRepeat: 'no-repeat'}}>
      
      
    <div className="container  challenge_box  ">
        <div className="g_challenge_section text-center">
        <h2 className=' grill_challenge_title'>Challenges</h2>
        {/* <img src="/img/underline.png" alt="" srcset="" className='g_challange_line'/> */}
        </div>
        <p className='mx-auto r grill_challenge_para '>Grill Number Shop operates in a niche market, where customers may not always be actively  searching for grill mobile numbers. This posed several challenges:</p>
        <div className="grill_img_data row mx-auto">
        <div className='col-xs-12 col-md-5 col-lg-6 grill_img_main p-0'>
            <img className="grill_img_profile " src="/grill/Challenge.svg" alt="Challenge" />
        </div>
       

        <div className='col-xs-12 col-md-5 col-lg-6 ul_part p-0'>
            <ul className='grill_ul_challenge '>
                <li className=' grill_li_challenge ' >Social Media Marketing</li>
                <li className=' grill_li_challenge ' >Created engaging posts on Instagram and Facebook to showcase their unique burgers and brand personality, driving customer engagement</li>
                <li className=' grill_li_challenge ' >Website SEO</li>
                <li className=' grill_li_challenge ' >Optimized the site for keywords like “best burgers in the UK,” improving search rankings and online visibility</li>
                <li className=' grill_li_challenge ' >Local SEO</li>
                <li className=' grill_li_challenge ' >Enhanced their Google My Business listing and used location-specific keywords to attract nearby customers</li>
                <li className=' grill_li_challenge ' >Paid Ads</li>
                <li className=' grill_li_challenge ' >Launched targeted Google and Meta ads to promote special offers, driving both online orders and in-store visits</li>
             
            </ul>
        </div>
        </div>
    </div>
      </div>   
    
    </>
  )
}

export default Challenges