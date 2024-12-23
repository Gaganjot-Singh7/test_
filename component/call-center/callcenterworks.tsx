
import '../../src/app/slide/slide.css';
import '../../src/app/project.css';
import '../../src/app/slide/slider.js';
import Icon1 from '../../public/callcenter-icon/callcenicon1.svg'
import Icon2 from '../../public/callcenter-icon/callcenicon2n.png'
import Icon3 from '../../public/callcenter-icon/newicon3.png'

const Home = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    verticalSwiping: true,
    touchMove: true,
    arrows: false,
    vertical: true,
    dots: true,
    speed: 1200,
    draggable: true,
    cssEase: 'cubic-bezier(0.86, 0, 0.07, 1)'
  };

  return (
    <div className='works_srvices pb-4'>
      <div className="pt-5 pb-3 w-100">
        <div className="b2b-container-lg">
          <div className="row ">
            <div className="col-md-12 "  >
              <h2 className="b2b-heading text-center text-capitalize services-heading" data-aos="fade-up">How Our <span className='works-services-heading'>Customer Support</span> Works?</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3 " data-aos="fade-up-left" data-aos-delay="300">

            <div className="service_box_outer greenGradiant call_cen_servics">
              <div className="service_box_gradiant  works-servics-radius">
                <div className="serviceIcon">
                  <div className="works_img ">
                    <img className='IconAlign' src={Icon1.src} alt="" />
                  </div>
                  <h3 className="b2b-service-heading call-cen-heading1">Initial Consultation</h3>
                  <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                    <p className="sub_text text-white mt-4 callcen_work_heading">
                      We start by understanding your business, goals,
                      and customer service requirements.This helps us
                      tailor our services to fit your specific needs.  <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-md-6 mb-3 " data-aos="fade-up-left" data-aos-delay="400">

            <div className="service_box_outer pinkGradiant  call_cen_servics">
              <div className="service_box_gradiant  works-servics-radius">
                <div className="serviceIcon">
                  <div className="works_img ">
                    <img className='IconAlign' src={Icon2.src} alt="" />
                  </div>
                  <h3 className="b2b-service-heading call-cen-heading2">Customized Solutions</h3>
                  <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                    <p className="sub_text text-white mt-4 callcen_work_heading">
                      Based on your requirements, we develop a
                      customized call center strategy, including training
                      materials, processes, and scripts to ensure
                      consistency and qualit .
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-4 col-md-6 mb-3 " data-aos="fade-up-left" data-aos-delay="500" >

            <div className="service_box_outer yellowGradiant call_cen_servics">
              <div className="service_box_gradiant  works-servics-radius">
                <div className="serviceIcon">
                  <div className="works_img work_img3">
                    <img className='IconAlign ' src={Icon3.src} alt="" />
                  </div>
                  <h3 className="b2b-service-heading call-cen-heading3">Ongoing Support</h3>
                  <div className="d-flex justify-content-between align-items-end mt-1 mt-sm-1">
                    <p className="sub_text text-white mt-4 callcen_work_heading">
                      Once we start handling your calls, we continuously
                      monitor performance, adjust strategies, and offer
                      reports to keep you updated on customer
                      interactions and satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;