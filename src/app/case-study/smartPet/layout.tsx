import Footer from "../../../../component/footer"
import Header from "../../../../component/header";

function layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default layout;
