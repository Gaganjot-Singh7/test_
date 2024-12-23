import Footer from "../../../../component/footer"
import Header from "../../../../component/header";

function layout({
    children, // will be a page or nested layout
  }) {
  return (
    <>
    <section>
        {/* Include shared UI here e.g. a header or sidebar */}
       
       <Header/>
        {children}
        <Footer/>
      </section>
    </>
  )
}

export default layout