"use client"
import React from 'react'
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import Callcenterbanner from "../../../component/call-center/callcenterbanner";
import Callcenterworks from "../../../component/call-center/callcenterworks";
import Callcenservices from "../../../component/call-center/callcenservices";
import Callcenterneeds from "../../../component/call-center/callcenterneeds";
import Callcenteraward from "../../../component/call-center/callcenaward" ;
import Callcenquestion from "../../../component/call-center/callcenquestion";
import Callcenreview from "../../../component/call-center/callcenreview"
function page() {
  return (
    <div>
      <Header/>
      <Callcenterbanner/>
      <Callcenterworks/>
      <Callcenservices/>
      <Callcenterneeds/>
      <Callcenteraward/>
      <Callcenquestion/>
      <Callcenreview/>
      <Footer/>
    </div>
    
  )
}

export default page
