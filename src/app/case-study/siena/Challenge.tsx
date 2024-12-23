import React from 'react'
import "./Challenge.css"
import radialRight from "../../../public/img/radial-right.svg"   
function Challenges() {
  return (
    <>

    <div className='bgBlack container_siena' style={{backgroundImage: `url(${radialRight.svg})`,backgroundRepeat: 'no-repeat'}}>
      
      
    <div className="container  challenge_box  ">
        <h2 className=' siena_challenge_title'>Challenges</h2>
        <p className='mx-auto text-center siena_challenge_para '>Siena Homes faced several challenges</p>
        <div className="siena_img_data row mx-auto">
        <div className='col-xs-12 col-md-5 col-lg-5 siena_img_main '>
            <img className="siena_img_profile " src="/siena/Challenge.svg" alt="Siena" />
        </div>
        <div className='d-xs-none col-md-2 col-lg-2 text-center line_img'><img src="/detailpage/line.svg" className="siena_line" alt="line"  /></div>

        <div className='col-xs-12 col-md-5 col-lg-5 ul_part '>
            <ul className='siena_ul_challenge '>
                <li className=' siena_li_challenge ' >Highly Competitive Market</li>
                <li className=' siena_li_challenge ' >The home decor and furniture industry is saturated with large, well-established players dominating search results, making it difficult for Siena Homes to compete.</li>
                <li className=' siena_li_challenge ' >Low Keyword Ranking</li>
                <li className=' siena_li_challenge ' >Under-Optimized Content</li>
             
            </ul>
        </div>
        </div>
    </div>
      </div>   
    
    </>
  )
}

export default Challenges