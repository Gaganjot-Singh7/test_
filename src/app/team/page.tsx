"use client";

import React, { useEffect,useState, useRef } from 'react';
import Header from "../../../component/header";
import About1 from "../../../public/img/team-page.svg"
import Footer from "../../../component/footer";
import "../team/about.css";
import Request from "../request-form";
import radialBg from '../../../public/img/radial_bg.svg'; 
import Icon1 from '../../../public/team-img/rakesh.png'; 
import Icon2 from '../../../public/team-img/rahul.png'; 
import manpreetSingh from '../../../public/team-img/manpreet-Singh.png'; 
import ArshpreetSingh from '../../../public/team-img/Arshpreet-Singh.png'; 
import Sumek from '../../../public/team-img/Sumek.png'; 
import SandeepSingh from '../../../public/team-img/Sandeep-Singh.png'; 
import SurajParkash from '../../../public/team-img/SurajParkash.png'; 
import DeeptiDixit from '../../../public/team-img/DeeptiDixit.png'; 
import LoveeJarewal from '../../../public/team-img/LoveeJarewal.png'; 
import Gaganjot from '../../../public/team-img/Gaganjot.png'; 
import SahilSolanki from '../../../public/team-img/SahilSolanki.png'; 
import SumitKumar from '../../../public/team-img/SumitKumar.png'; 
import VarshaKumari from '../../../public/team-img/VarshaKumari.png'; 
import AmanKumar from '../../../public/team-img/AmanKumar.png'; 
import RishabhDixit from '../../../public/team-img/RishabhDixit.png'; 
import SameerKathat from '../../../public/team-img/SameerKathat.png'; 
import Zaid from '../../../public/team-img/Zaid.png'; 
import NasirAhmed from '../../../public/team-img/NasirAhmed.png'; 
import Suryathakur from '../../../public/team-img/Suryathakur.png'; 
import VineetKumarRana from '../../../public/team-img/VineetKumarRana.png'; 
import AmbalikaPhanker from '../../../public/team-img/AmbalikaPhanker.png'; 
import RajanKumar from '../../../public/team-img/RajanKumar.png'; 
import AnuragSharma from '../../../public/team-img/AnuragSharma.png'; 
import RahulRaj from '../../../public/team-img/RahulRaj.png'; 
import MDSahjadAnsari from '../../../public/team-img/md-sir.svg'; 
import DeepakChauhan from '../../../public/team-img/DeepakChauhan.png'; 
import Lakhwinder from '../../../public/team-img/Lakhwinder.png'; 
import VikashSoni from '../../../public/team-img/vikash.svg'; 
import SanjeevKumar from '../../../public/team-img/SanjeevKumar.png'; 
import ParshantKumar from '../../../public/team-img/ParshantKumar.png'; 
import Ramnish from '../../../public/team-img/Ramnish.png'; 
import OmParkash from '../../../public/team-img/OmParkash.png'; 
import SaddamHusain from '../../../public/team-img/SaddamHusain.png'; 
import GauravKumar from '../../../public/team-img/GauravKumar.png'; 
import RishavKarn from '../../../public/team-img/RishavKarn.png'; 
import HarshRaj from '../../../public/team-img/HarshRaj.png'; 
import ShubhamSharma from '../../../public/team-img/ShubhamSharma.png'; 
import LalitKumar from '../../../public/team-img/LalitKumar.png'; 

import Img1 from '../../../public/team-img/img1.png'; 
import Img2 from '../../../public/team-img/img2.png'; 
import Img3 from '../../../public/team-img/img3.png'; 
import Img4 from '../../../public/team-img/img4.png'; 
import Img5 from '../../../public/team-img/img5.png'; 
import Img6 from '../../../public/team-img/img6.png'; 
import Slider from "react-slick";
import { Link,  Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import radialRight from '../../../public/img/radial-right.svg'; 

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import PageHead from "../../../component/PageHead";
export default function Team() {
  const baseURL = "https://base2brand.com/team";
  const wwwURL = "https://www.base2brand.com/team";
  let canonical = '';
  // Check if the current URL includes 'www'
  if (typeof window !== "undefined") {
  const isUsingWWW = window.location.href.includes("www.");
   canonical = isUsingWWW ? wwwURL : baseURL;
}
   
  const PageMeta={
    title:"Meet Our Team | Our Experts | Get to Know Us",
    description:"Meet the experts behind Base2Brand! Our dedicated team drives your digital success. Get to know us and see how we can help your business grow.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function() {
      const ModalBody = document.querySelector(".request-form");
      if(ModalBody){
        ModalBody.classList.add("transformAnim");
      }
                               
      }, 200);
  };
  return ( 
    <>
    <head>
    <meta property="og:title" content='Meet Our Team | Our Experts | Get to Know Us' />
    <meta property="og:description" content={PageMeta.description} />
    </head>
    <PageHead PageMeta={PageMeta}/>
      <Header />
        <div className="pt-0 pb-0 b2b-black-bg">
          <div className="about-mask pt-5" style={{backgroundImage: `url(${radialBg.src})`,backgroundSize: 'contain',backgroundRepeat: 'no-repeat'}}>
            <div className="row m-0 position-relative text-white pt-md-5 pt-0"> 
              
              <div className="col-12 col-sm-12 col-md-7 m-auto text-center" data-aos="fade-up">
                  <h1 className='b2b-sub-heading-bold text-capitalize'>Our Cherished Team</h1>
                  <p className='b2b-sub-text'>Each member in our team of Shopify experts, digital marketers and graphic designers experienced and well efficient to deliver the assigned projects before the deadline.
                  </p>
                  <div className="mt-md-5 mt-3 text-center mb-md-5 mb-3 pb-md-5 pb-0">
                    <button onClick={toggleModal} className="b2b-btn b2b-btn-lg">Request a Quote </button>
                  </div>
                  <div className='text-center'>
                    {/* <img src={About1.src} alt="" /> */}
                    <DotLottieReact
                        src='/json/about-us/Our Cherished Teams.json'
                        loop
                        autoplay
                        className="team-animated-img"
                      />
                  </div>
                
              </div>
              
             
            </div>
          
            
              <div className="crew-wrap mt-5">
                <div className="row justify-content-center higher-officials">
                  <div className="col-md-12 mx-auto text-center text-white mb-5"> 
<div className="text-center">
<h1 className='b2b-sub-heading-bold text-uppercase' data-aos="fade-up">Higher Officials</h1>

</div>
                  </div>
                  <div className='col-md-3 col-sm-4 col-5 mb-md-5 mb-4' data-aos="zoom-in-up" data-aos-delay="100">
                    <img src={Icon1.src} alt='' />
                    <div className='team-details'>
                      <h3>Rakesh Arora</h3>
                      <p>Director (CEO)</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-sm-4 col-5 mb-md-5 mb-4' data-aos="zoom-in-up" data-aos-delay="200">
                    <img src={Icon2.src} alt='' />
                    <div className='team-details'>
                      <h3>Rahul Dhyaniya</h3>
                      <p>Chief Executive Officer (CEO)</p>
                    </div>
                  </div>
                </div>
                <div className="employeesWrap row row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-2 justify-content-center mt-5">
                  <div className="w-100 col-md-12 mx-auto text-center text-white mb-5"> 
            <div className="text-center">
            <h1 className='b2b-sub-heading-bold text-uppercase' data-aos="fade-up">Team</h1>

            </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={manpreetSingh.src} alt='' />
                    <div className='team-details'>
                      <h3>manpreet Singh</h3>
                      <p>Project Manager</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={ArshpreetSingh.src} alt='' />
                    <div className='team-details'>
                      <h3>Arshpreet Singh</h3>
                      <p>Project Coordinator</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={SandeepSingh.src} alt='' />
                    <div className='team-details'>
                      <h3>Sandeep Singh</h3>
                      <p>Technical Lead</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={Zaid.src} alt='' />
                    <div className='team-details'>
                      <h3>Zaid</h3>
                      <p>Digital Marketing Project Manager</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={Sumek.src} alt='' />
                    <div className='team-details'>
                      <h3>Sumek</h3>
                      <p>Human Resource Executive</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={SameerKathat.src} alt='' />
                    <div className='team-details'>
                      <h3>Sameer Kathat</h3>
                      <p>Digital Marketing Team Lead</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={DeeptiDixit.src} alt='' />
                    <div className='team-details'>
                      <h3>Deepti Dixit</h3>
                      <p>Business Development Lead</p>
                    </div>
                  </div>
               

                  {/*  */}
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={SahilSolanki.src} alt='' />
                    <div className='team-details'>
                      <h3>Sahil Solanki</h3>
                      <p>graphic &amp; uI/UX designer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={MDSahjadAnsari.src} alt='' />
                    <div className='team-details'>
                      <h3>Md. Sahjad Ansari</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>

                  {/*  */}
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={SurajParkash.src} alt='' />
                    <div className='team-details'>
                    <h3>Suraj Parkash</h3>
                    <p>Quality Analyst</p>
                    </div>
                  </div>
                  
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={NasirAhmed.src} alt='' />
                    <div className='team-details'>
                      <h3>Nasir Ahmed</h3>
                      <p>Senior Digital Marketer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={Suryathakur.src} alt='' />
                    <div className='team-details'>
                      <h3>Surya thakur</h3>
                      <p>Senior Digital Marketer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={VineetKumarRana.src} alt='' />
                    <div className='team-details'>
                      <h3>Vineet Kumar Rana</h3>
                      <p>Digital Marketer</p>
                    </div>
                  </div>
                  {/* <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={RajanKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Rajan Kumar</h3>
                      <p>Digital Marketer</p>
                    </div>
                  </div> */}
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={AmbalikaPhanker.src} alt='' />
                    <div className='team-details'>
                      <h3>Ambalika Phanker</h3>
                      <p>Digital Marketer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={AmanKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Aman Kumar</h3>
                      <p>graphic &amp; uI/UX designer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={VarshaKumari.src} alt='' />
                    <div className='team-details'>
                      <h3>Kanishtha Sharma</h3>
                      <p>Business Development Executive</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={SumitKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Sumit Kumar</h3>
                      <p>graphic &amp; uI/UX designer</p>
                    </div>
                  </div>
                  
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={RishabhDixit.src} alt='' />
                    <div className='team-details'>
                      <h3>Rishabh Dixit</h3>
                      <p>Video Editor</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={AnuragSharma.src} alt='' />
                    <div className='team-details'>
                      <h3>Anurag Sharma</h3>
                      <p>Content Writer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={ShubhamSharma.src} alt='' />
                    <div className='team-details'>
                      <h3>Shubham Sharma</h3>
                      <p>React Native</p>
                    </div>
                  </div>
{/*  */}
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={OmParkash.src} alt='' />
                    <div className='team-details'>
                    
                      <h3>Om Parkash</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>

                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={VikashSoni.src} alt='' />
                    <div className='team-details'>
                      <h3>Vikash Soni</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={SaddamHusain.src} alt='' />
                    <div className='team-details'>
                      <h3>Saddam Husain</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={DeepakChauhan.src} alt='' />
                    <div className='team-details'>
                      <h3>Deepak Chauhan</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={Lakhwinder.src} alt='' />
                    <div className='team-details'>
                      <h3>Lakhwinder</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={SanjeevKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Sanjeev Kumar</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={LalitKumar.src} alt='' />
                    <div className='team-details'>
                    <h3>Lalit Kumar</h3>
                    <p>React Native</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={RahulRaj.src} alt='' />
                    <div className='team-details'>
                      <h3>Rahul Raj</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={ParshantKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Parshant Kumar</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={Ramnish.src} alt='' />
                    <div className='team-details'>
                      <h3>Ramnish</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={RishavKarn.src} alt='' />
                    <div className='team-details'>
                      <h3>Rishav Karn</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={GauravKumar.src} alt='' />
                    <div className='team-details'>
                      <h3>Gaurav Kumar</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={HarshRaj.src} alt='' />
                    <div className='team-details'>
                      <h3>Harsh Raj</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={LoveeJarewal.src} alt='' />
                    <div className='team-details'>
                      <h3>Lovee Jarewal</h3>
                      <p>Business Development Executive</p>
                    </div>
                  </div>
                  <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={Gaganjot.src} alt='' />
                    <div className='team-details'>
                      <h3>Gaganjot Singh</h3>
                      <p>Software Developer</p>
                    </div>
                  </div>
                  
                  
                  
                </div>
              </div>
            
          </div>

          
          
          <div className="b2b-black-bg pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}}>
              <div className="crew-wrap work-with-us mt-5">
                <div className="row justify-content-center higher-officials">
                  <div className="col-md-12 mx-auto text-center text-white mb-md-5 mb-3"> 
                      <h1 className='b2b-sub-heading-bold text-uppercase' data-aos="fade-up" data-aos-delay="100">We Believe In Ourselves <br />You&apos;ll Love Working With Us</h1>
                  </div>
                  <div className='col-md-12 mb-4' data-aos="zoom-in-up" data-aos-delay="200">
                    <img src={Img1.src} alt='' />
                  </div>
                  <div className='col-12 col-md-6  mb-4' data-aos="zoom-in-up" data-aos-delay="300">
                    <img src={Img2.src} alt='' />
                  </div>
                  <div className='col-12 col-md-6  mb-4' data-aos="zoom-in-up" data-aos-delay="400">
                    <img src={Img3.src} alt='' />
                  </div>
                  <div className='col-md-12  mb-4' data-aos="zoom-in-up" data-aos-delay="500">
                    <img src={Img4.src} alt='' />
                  </div>
                  <div className='col-12 col-md-6  mb-4' data-aos="zoom-in-up" data-aos-delay="600">
                    <img src={Img5.src} alt='' />
                  </div>
                  <div className='col-12 col-md-6  mb-4' data-aos="zoom-in-up" data-aos-delay="700">
                    <img src={Img6.src} alt='' />
                  </div>
                </div>
              </div>
              
              <div className='container mb-5 pt-5'>
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <h2 className='b2b-main-heading text-center mb-5 text-uppercase' data-aos="fade-up">More about us</h2>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-3" data-aos="zoom-in-up" data-aos-delay="300">
                    <a className="menuLink" href="/about">
                      <div className="menuInner b2b-lightBlue-bg">
                          <h3 className='b2b-title-text text-black'>About Us</h3>
                          <div className='d-flex align-items-center justify-content-between'>
                            <p className='menuText mb-0'>We are super efficient and humble to serve you.</p>
                            <span className='menuIcon pl-3'></span>
                          </div>
                      </div>
                    </a> 
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 mb-3" data-aos="zoom-in-up" data-aos-delay="300">
                    <a className="menuLink" href="/career">
                      <div className="menuInner b2b-pink-bg">
                          <h3 className='b2b-title-text text-black'>Career</h3>
                          <div className='d-flex align-items-center justify-content-between'>
                            <p className='menuText mb-0'>Know the latest openings 
                            <br /> in our organization.</p>
                            <span className='menuIcon pl-3'></span>
                          </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
          </div>
          <Footer />
        </div>
        {showModal && 
          <Request 
            onCloseModal={toggleModal} 
          />
        }
      </>
  );
}
