

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./home-backup";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Index from './index'
import { AppStateProvider }  from "./context/AppStateContext";

// import AnimatedCursor from "react-animated-cursor"; 
import Head from 'next/head'
import Header from "../../component/header";
import Footer from "../../component/footer";
const inter = Inter({ subsets: ["latin"] }); 
 
export const metadata: Metadata = {
  verification: {
    google: 'bUGDRRzEBb5VQ8pNq6l7Qtp-sQJg15CvaLJ2a2O8ZH8',
  },
  robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large'
   
}


export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
 
 

  return (
    <html lang="en">
      
      <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta name="google-site-verification" content="bUGDRRzEBb5VQ8pNq6l7Qtp-sQJg15CvaLJ2a2O8ZH8" /> 
      
      {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      </Head>
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,700;1,100;1,300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Content:wght@400;700&family=Manrope:wght@200;300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,700;1,100;1,300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        {/* <AnimatedCursor
        innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}  
  innerStyle={{
    backgroundColor: '#fff'
  }}
  outerStyle={{
    border: '3px solid #fff'
  }}
      /> */}
        {/* <Home /> */} 
        <AppStateProvider> 
          {/* <Header/> */}
        <Index>{children}</Index>
  {/* <Footer/> */}
        </AppStateProvider>
        


        <ToastContainer />
        {/* <script src="https://cdn.tailwindcss.com"></script>  */}

        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
          integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
          crossOrigin="anonymous"
        ></Script>
        {/* <script type="text/javascript" src='https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js'></script>
      <script type="text/javascript" src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
      <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script> */}
      </body>
    </html>
  );
}
