'use client';
import React, { useState } from "react"; 
import Image from 'next/image';
import CountUp, { useCountUp } from 'react-countup'; 
import About from '../../public/img/about.png';    
// import VisibilitySensor from 'react-visibility-sensor';
import b2bTeam from '../../public/img/b2bTeam.png';   
import technologies from '../../public/img/technologies.png';   

import check from '../../public/img/check.svg'; 
// import solarJson from '../../public/json/Solar-system-Shopify.json'; 

import yrInIndustury from '../../public/img/icon1.svg'; 
import projects from '../../public/img/icon2.svg'; 
import rating from '../../public/img/icon3.svg'; 
import happyClient from '../../public/img/icon4.svg'; 
import design from '../../public/img/icon5.svg'; 
import Request from "./request-form";
import './our-project.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const images = {
  frontend: [
    { src: "/img/languages/Group 1707480008.svg", alt: "HTML", width: 50, height: 50, text:"At our company, we leverage cutting-edge technologies for front-end development to deliver seamless user experiences. From React to Angular, our team ensures fast, responsive, and visually stunning websites and applications.", },
    { src: "/img/languages/Group 1707480009.svg", alt: "CSS", width: 50, height: 50 },
    { src: "/img/languages/Group 1707480012.svg", alt: "Angular", width: 50, height: 50 },
    { src: "/img/languages/Group 1707480011.svg", alt: "JavaScript", width: 50, height: 50 },
    { src: "/img/languages/Group 1707480010.svg", alt: "React", width: 50, height: 50 },
    { src: "/img/languages/Group 1707480015.svg", alt: "Flutter", width: 50, height: 50 },
  ],
  backend: [
    { src: "/img/languages/php.svg", alt: "PHP", width: 50, height: 50, text:"Our backend development utilizes the latest technologies and robust architectures to ensure secure, scalable, and high-performing applications, providing seamless data management and optimized server performance." },
    { src: "/img/languages/nodejs.svg", alt: "Node.js", width: 50, height: 50 },
    { src: "/img/languages/jsbackend.svg", alt: "JavaScript Backend", width: 50, height: 50 },
  ],
  ecommerce: [
    { src: "/img/languages/shopify.svg", alt: "Shopify", width: 50, height: 50, text:'We build dynamic e-commerce platforms using advanced tools, enabling smooth transactions, secure payment gateways, and user-friendly interfaces that drive online sales and enhance customer experiences.' },
    { src: "/img/languages/woocemerse.svg", alt: "WooCommerce", width: 50, height: 50 },
   
    { src: "/img/languages/emet.svg", alt: "Emet", width: 50, height: 50 },
    { src: "/img/languages/wordpress.svg", alt: "WordPress", width: 50, height: 50 },
    { src: "/img/languages/shopifyplus.svg", alt: "Shopify Plus", width: 50, height: 50 },
  ],
  framework: [
    { src: "/img/languages/net.svg", alt: ".NET", width: 50, height: 50, text:"With expertise in modern frameworks like .Net, Laravel, and Node.js, we develop flexible, reliable, and maintainable applications tailored to meet your specific business needs." },
    { src: "/img/languages/f1.svg", alt: "Framework 1", width: 50, height: 50 },
    { src: "/img/languages/firebase.svg", alt: "Firebase", width: 50, height: 50 },
    { src: "/img/languages/codeintiger.svg", alt: "CodeIgniter", width: 50, height: 50 },
    { src: "/img/languages/cakephp.svg", alt: "CakePHP", width: 50, height: 50 },
  ]
};



export default function Homeabout() {

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
useCountUp({
  ref: 'counter',
  enableScrollSpy: true,
  scrollSpyDelay: 2000,
  end: 0
});

  const [activeTab, setActiveTab] = useState('frontend'); // State for active tab


  const renderText = (category) => (
    images[category].map(({ text }, index) => (
                <>
               
                 {text} 
                  </>

     
    ))
  );


  const renderImages = (category) => (
    images[category].map(({ src, alt, width, height }, index) => (
      <div key={index} className="p-0 m-1 col ph_align_tec_icon" >
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    ))
  );

  return (

    <>
    
   
    <div className="blackGradient b2b-brands-wrap ">
      
      <div className="b2b-container-lg py-md-5 py-sm-1 py-1">  
        <div className="col-md-12 text-center">
          <div className="text-center">
          <h2 className="b2b-main-heading" data-aos="fade-up-right">Technologies we use </h2> 
          {/* <img src="/img/underline.png" alt="" className="line_technology" /> */}
          </div>
          <h3 className="b2b-title-text" data-aos="fade-up-right" data-aos-delay="300">We use cutting-edge technologies to craft fully automated solutions</h3>
        </div>
        <div className="row pt-4 "  >
          <div className="btn-col col-lg-5">
            <div className="nav flex-column nav-pills me-3 gap-lg-4 gap-md-4 gap-2 gap-md-3 btn-col" id="v-pills-tab" role="tablist" aria-orientation="vertical" >
              {Object.keys(images).map((key) => (
                <button
                  key={key}
                  className={`nav-link  ${key === activeTab ? `${key}-active` : ''}` }
                  id={`v-pills-${key}-tab`}
                  data-bs-toggle="pill"
                  data-bs-target={`#v-pills-${key}`}
                  type="button"
                  role="tab"
                  aria-controls={`v-pills-${key}`}
                  aria-selected={key === activeTab}
                  onClick={() => setActiveTab(key)}
                  
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="contant-col col-lg-7" >
            <div className="tab-content" id="v-pills-tabContent">
              {Object.keys(images).map((key) => (
                <div
                  key={key}
                  className={`tab-pane fade ${key === activeTab ? 'show active' : ''}`}
                  id={`v-pills-${key}`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-${key}-tab`}
                >
                  <p className="col-12 b2b-sub-text aos-init aos-animate pt-lg-2 pt-2">
                    {renderText(key)}
                  </p>
                  <div className="row row-cols-lg-4 row-cols-3 justify-content-center justify-content-lg-start pt-lg-2 pt-2 gap-4">
                    {renderImages(key)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    </div>

 <div className="radialGradient">
      <div className="b2b-container-lg"> 
          <div className='progress-column b2b-achievements'>
          
            <div className='row'>
                <div className='col-xl-6 col-lg-7 col-md-7 col-sm-12 header-columns p-5 p-sm-3 m-auto'>
                  <h2 className='text-center b2b-sub-heading-bold ttext-capitalize' data-aos="fade-up">Our Achievements &amp; Milestones</h2>
                  <p className='b2b-text text-center ' data-aos="fade-up" data-aos-delay="300">Explore our company&apos;s remarkable achievements, milestones, and records that showcase our success and expertise</p>
                </div>
            </div>
            
            <div className='b2b-container-lg'>
              <div className='row progress-count d-flex flex-wrap justify-content-between'>
                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap '>
                      <div><img src={yrInIndustury.src} /></div>
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center'><CountUp end={5} enableScrollSpy />
                        +</h2>
                        <p className='text-white text-center'>Years of IT Industury</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                      <div><img src={projects.src} /></div>
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center'><CountUp end={250} enableScrollSpy />+</h2>
                        <p className='text-white text-center'>Successfull Project</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                      <div><img src={rating.src} /></div>
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center'><CountUp end={4.9} enableScrollSpy decimals={1} decimal="."/>+</h2>
                        <p className='text-white text-center'>Ratings on Clutch</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                      <div><img src={happyClient.src} /></div>
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center'><CountUp end={100} enableScrollSpy />+</h2>
                        <p className='text-white text-center'>Happy Client</p>
                      </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className='d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap'>
                      <div><img src={design.src} /></div>
                      <div className='ms-2 w-100'>
                        <h2 className='text-white text-center'><CountUp end={100} enableScrollSpy />+</h2>
                        <p className='text-white text-center'>Website Designed</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div> 
    </div> 
          <div className="b2b-container-lg">  
              
          


          <div className="row align-items-center row-reverse-mb mt-3 mb-md-5 mb-1"> 
            <div className="col-lg-6 col-md-12 col-12 text-white order-md-2 order-sm-2 order-xs-2 order-2 mt-md-5"   >
              <h2 className="b2b-main-heading  text-capitalize" data-aos="fade-up-right">Have A Dream ? <br /> We Have A Team!</h2> 
              <p className="b2b-sub-text" data-aos="fade-up-right" data-aos-delay="300">At our place, we have a stellar team of experts dedicated to bringing your vision to life. With extensive experience and a deep understanding of diverse industries, our team is equipped to handle any challenge that comes our way.</p>
              <p className="b2b-sub-text" data-aos="fade-up-right" data-aos-delay="400">Throughout the project, we prioritize clear communication and transparency, guiding you through every step and addressing any doubts or questions that may arise. Despite our high-quality services, we remain committed to offering competitive pricing to ensure accessibility for businesses of all sizes.</p>
              <p className="b2b-sub-text" data-aos="fade-up-right" data-aos-delay="500">Having successfully completed hundreds of projects, we bring a wealth of knowledge and expertise to each new endeavor, guaranteeing exceptional results that exceed expectations.</p>
             
            </div>
            <div className="col-lg-6 col-md-12 col-12 text-center mb-5 mb-md-0 order-md-3 order-sm-3 order-xs-3 order-3"  data-aos="fade-up-left" data-aos-delay="300"  >
              
              <DotLottieReact
              src='/json/home-page/lottie animation.json'
              loop
              autoplay
              className="dream_img"
            /> 
            </div> 
            <div className="col-lg-8 col-md-12 col-12 mb-5 mb-md-0 order-lg-3 order-md-1 order-sm-1 order-xs-1 order-1">
            <h3 className="b2b-sub-text b2b-lightBlue-text" data-aos="fade-up-right" data-aos-delay="800">Our client list includes:</h3>
             <div className="d-flex justify-content-between flex-wrap">
                <div className="check_list b2b-text" data-aos="fade-up-right" data-aos-delay="900"><img src={check.src} className=' check_icon me-2' alt="" />  Startups due to our cost-effectiveness</div>
                <div className="check_list b2b-text" data-aos="fade-up-right" data-aos-delay="1000"><img src={check.src} className=' check_icon me-2' alt="" />  Corporates due to our reliability and scalability</div>
                <div className="check_list b2b-text" data-aos="fade-up-right" data-aos-delay="1100"><img src={check.src} className=' check_icon me-2' alt="" />  Industries due to our expertise and versatility</div>
                
  
                
              </div>
              <button className="b2b-btn b2b-btn-sm mt-4 m-0" onClick={toggleModal} data-aos="fade-up-right" data-aos-delay="1200"> Let’s Discuss Your Project
              </button>
            </div>
            
          </div>
          {showModal && 
            <Request 
              onCloseModal={toggleModal} 
            />
          }
      </div> 


    </>
  );
}