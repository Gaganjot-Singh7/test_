'use client'

import React from "react";
import Brand1 from '../../public/brand/brand1.svg';
import Brand2 from '../../public/brand/brand2.svg';
import Brand3 from '../../public/brand/brand3.svg';
import Brand4 from '../../public/brand/brand4.svg';
import Brand5 from '../../public/brand/brand5.svg';
import Brand6 from '../../public/brand/brand6.svg';
import Brand7 from '../../public/brand/brand7.svg';
import Brand8 from '../../public/brand/brand8.svg';
import Brand9 from '../../public/brand/brand9.svg';
import Brand10 from '../../public/brand/brand10.svg';
import Brand11 from '../../public/brand/brand11.svg';
import Brand12 from '../../public/brand/brand12.svg';
import Brand13 from '../../public/brand/brand13.svg';
import Brand14 from '../../public/brand/brand14.svg';
import Brand15 from '../../public/brand/brand15.svg';
import Brand16 from '../../public/brand/brand16.svg';
import Brand17 from '../../public/brand/brand17.svg';
import Brand18 from '../../public/brand/brand18.svg';
import Brand19 from '../../public/brand/brand19.svg';
import Brand20 from '../../public/brand/brand20.svg';
import Brand21 from '../../public/brand/brand21.svg';
import Brand22 from '../../public/brand/brand22.svg';
import Brand23 from '../../public/brand/brand23.svg';
import './our-project.css'
import Slider from "react-slick";
import Marquee from "react-fast-marquee";

interface BrandProps {
  heading?: string;

  bgcolor?: string;
  color?: string;
}
export default function Brand({ heading, bgcolor, color }: BrandProps) {

  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 6,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };



  return (
    <>
      <div className={`w-100 b2b-brands-wrap radialGradient  ${bgcolor === "b2b-gray-bg" ? "b2b-white-bg" : "BG-RED "}`} >
        <div className="container-fluid p-0">
          <h3 className={`b2b-sub-heading-bold gk-heading-bold text-center text-capitalize  ${color ? color : 'text-white'}`} data-aos="fade-up">
            {heading}
          </h3>
          <div className="logo_brand" data-aos="fade-up" data-aos-delay="300">
          <Marquee>
              <div>
              <img className="logo_brands" src={Brand1.src} alt="Logo" />
              </div>
              <div>

              <img className="logo_brands" src={Brand2.src} alt="Logo" />
              </div>

              <div>


              <img className="logo_brands" src={Brand3.src} alt="Logo" />
              </div>

              <div>

              <img className="logo_brands" src={Brand4.src} alt="Logo" />
              </div>

              <div>

              <img className="logo_brands" src={Brand5.src} alt="Logo" />
              </div>


              <div>
              <img className="logo_brands" src={Brand6.src} alt="Logo" />
              </div>


              <div>
              <img className="logo_brands" src={Brand7.src} alt="Logo" />
              </div>


              <div>
              <img className="logo_brands" src={Brand8.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand9.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand10.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand11.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand12.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand13.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand14.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand15.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand16.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand17.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand18.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand19.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand20.src} alt="Logo" />
              </div>

              <div>

              <img className="logo_brands" src={Brand21.src} alt="Logo" />
              </div>

              <div>

              <img className="logo_brands" src={Brand22.src} alt="Logo" />
              </div>

              <div>
              <img className="logo_brands" src={Brand23.src} alt="Logo" />
              </div>

              </Marquee>
 
          </div>
        </div>
      </div>
    </>
  )
}