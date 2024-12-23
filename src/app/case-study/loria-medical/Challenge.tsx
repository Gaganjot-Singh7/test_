import React from "react";
import "./Challenge.css";

function Challenge() {
  return (
    <>
      <div className="bgBlack poppins">
        <div className="container  challenge_box  ">
          <div className="challenge_loria_heading text-center">
            <h2 className=" challenge_title">Challenges</h2>
            {/* <img
              src="/img/underline.png"
              alt=""
              className="loria_challenge_underline"
            /> */}
          </div>

          <p className="mx-auto  challenge_para ">
            Male enhancement is a sensitive and highly competitive market.
            Marketing for medical procedures, particularly those related to male
            health, presents unique challenges, including:
          </p>
          <div className="row mx-auto loria_challenge">
            <div className="col-xs-12 col-md-6 col-lg-6 loria_img_main p-0">
              <img
                className="loria_img_profile "
                src="/detailpage/banana.svg"
                alt="banana"
              />
            </div>
           

            <div className="col-xs-12 col-md-6 col-lg-6 ul_part p-0">
              <ul className="ul_challenge ">
                <li className=" li_challenge ">Sensitive subject matter</li>
                <li className=" li_challenge ">
                  Communicating effectively about male enhancement while
                  maintaining professionalism and trust
                </li>
                <li className=" li_challenge ">Ad regulations</li>
                <li className=" li_challenge ">
                  Meta (Facebook and Instagram) has stringent guidelines for
                  advertising medical services and procedures, making it
                  difficult to craft compliant, engaging ads
                </li>

                <li className=" li_challenge ">Reaching the right audience</li>
                <li className=" li_challenge ">
                  {" "}
                  It was essential to target men aged 30-60 who were likely to
                  be interested in the procedures while maintaining privacy and
                  discretion
                </li>
                <li className=" li_challenge">
                  Content Restrictions and Ad Rejections
                </li>
                <li className=" li_challenge ">
                  {" "}
                  The creation of content and graphics for the Meta Ads campaign
                  faced significant hurdles due to Meta's strict policies. Our
                  initial creatives were frequently rejected, which necessitated
                  a strategic reevaluation of our approach. We had to develop
                  compliant content that adhered to these guidelines while still
                  effectively communicating the unique benefits of Dr. Loria's
                  male enhancement procedures
                </li>

                <li className=" li_challenge ">
                  Account Disabling and Communication Hurdles
                </li>
                <li className=" li_challenge ">
                  To complicate matters further, our ad account was disabled by
                  Meta, requiring multiple calls with their support team to
                  regain access. During these discussions, we needed to clearly
                  articulate the nature of our services, which focus on
                  sensitive topics that potential clients are often reluctant to
                  discuss openly. Additionally, we had to carefully segment our
                  audience and interests to tailor our messaging, ensuring it
                  resonated with individuals seeking guidance and consultations
                  in a discreet manner
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Challenge;
