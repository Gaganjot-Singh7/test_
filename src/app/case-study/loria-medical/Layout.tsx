// import React from 'react'
// import PageHead from "../../../component/PageHead";
// import Footer from "../../../component/footer";
// import Page from "./page"
// import AboutLoria from './AboutLoria';
// function Layout() {
//     const PageMeta = {
//         title: "Detail page",
//         description:
//           "Embark on a career with Base2Brand India! Explore exciting opportunities and apply now to join our innovative team committed to excellence.",
//         // canonical: canonical, // Replace with your page's canonical URL
//         image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
//       };
//   return (
//    <>
//     <PageHead PageMeta={PageMeta} />
//     {/* Navbar */}
//     <Header />

// <Page/>
// <AboutLoria/>

   
//    </>
//   )
// }

// export default Layout
import Footer from "../../../../component/footer"
import Header from "../../../../component/header";


export default function DetailpageLyout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
       
       <Header/>
        {children}
        <Footer/>
      </section>
    )
  }