// components/HorizontalScroll.tsx
import { useEffect, useRef } from 'react';
import  "./VerticalSlideshow.css";
import Why from "../../public/img/why-choose.svg"
import  link  from '../../public/img/link1.svg';
import Slider from "react-slick";
// import { debounce } from 'lodash';
import FooterMap from '../app/footer-map'

export default function HorizontalScroll() {
 
 
  return (
  
    <div className='slider_vertical'>
     
      <section className='stickySection slideswrap slide_data text-center text-white slide_height'>
        <h1>What sets <br /> us apart  ? </h1> 
        </section>
      <section className='stickySection slideswrap slide_data1 pt-5'>
        <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className='heading_why'>Why Choose Us ?</p>
            <h2 className='desc_slide'>From ideation to implementation, <br /> we provide excellence in every <br /> strategy and line of code.
            </h2>
            <p className='our_border mt-4'>We specialize in enterprise software development, utilizing our expertise in Python, Java, and mobile app development to turn innovative ideas into fully functional software solutions. In addition to software development, we offer comprehensive digital marketing services, helping businesses grow their online presence and achieve measurable success through tailored strategies and the latest marketing tools.
            </p>
          </div>
          <div className="col-md-6">
            <div className="client_descs d-flex gap-5 mb-4">
              <div className="pert_num">
                90%
              </div>
              <div className="client_desc_data">
                <h4>Client-centric approach</h4>
                <p>We make it our mission to comprehend our clients' needs, objectives, and preferences in addition to simply listening to them. We are able to offer creative solutions that surpass their expectations by doing this.</p>
              </div>
            </div>

            <div className="client_desc d-flex gap-5 mb-4">
              <div className="pert_num">
                95%
              </div>
              <div className="client_desc_data">
                <h4>On-time project delivery</h4>
                <p>We surpass deadlines rather than just meeting them. Since we value time so highly, we place a high priority on completing projects on schedule</p>
              </div>
            </div>

            <div className="client_descs d-flex gap-5 mt-5">
              <div className="pert_num">
                90%
              </div>
              <div className="client_desc_data">
                <h4>Experienced developer</h4>
                <p>Our skilled team has a track record of developing dependable, scalable software solutions that cater to the particular requirements of startups and other businesses.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className='stickySection slideswrap slide_data2 py-5 py-sm-3'>
        <div className='b2b-container'>
          <div className="row align-items-center">
            <div className="col-md-6">
                <div className="b2b_data">
                  <div className="number_pro">
                    <h4 className='b2b-sub-heading-bold text-dark'>250+</h4>
                    <small className='b2b-sub-text text-dark'>Products</small>
                  </div>

                  <div className="number_pro">
                    <h4 className='b2b-sub-heading-bold text-dark'>100+</h4>
                    <small className='b2b-sub-text text-dark'>Happy Clients</small>
                  </div>

                  <div className="number_pro">
                    <h4 className='b2b-sub-heading-bold text-dark'>50+</h4>
                    <small className='b2b-sub-text text-dark'>Employees</small>
                  </div>

                  <div className="number_pro">
                    <h4 className='b2b-sub-heading-bold text-dark'>5+</h4>
                    <small className='b2b-sub-text text-dark'>Years Experience</small>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
              <img className='slide_data2_img pt-2' src={Why.src} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='stickySection slideswrap slide_data3'>
        <div className="row align-items-center">
        <div className="col-md-6 mx-auto text-center">
          <p>Do You Have a Project to Start?</p>
          <h1 className='b2b-sub-heading-bold text-dark'>Together We'll <br />Complete It!</h1>
          <a className='connect_link'>
            Let&apos;s<br />connect
            <img className='link_icon' src={link.src} alt="" />
          </a>
        </div>
        </div>
        </section> 
        <section className='stickySection'>
          <FooterMap />
        </section>
    </div>
  );
};
