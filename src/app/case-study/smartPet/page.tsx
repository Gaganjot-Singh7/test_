import Banner from "./Banner";
import About from "../healthyBedrooms/About"
import Objective from "./Objective";
import Challenge from "./Challenge";
import Solution from "./Solution";
import Result from "./Result";
import PageHead from "../../../../component/PageHead";
function page() {
  const PageMeta = {
    title: "Smart Pet Depot | 360° Digital Marketing Case Study",
    description:
      "Learn how Smart Pet Depot leveraged 360° digital marketing to boost brand awareness and sales. Read the case study for effective strategies and results.",
    // canonical:canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  return (
   <>
   <PageHead PageMeta={PageMeta}/>
   <Banner/>
   <About title="About Smart Pet Depot" para="Smart Pet Depot is a leading retailer specializing in pet accessories and products. Catering to a diverse range of pet owners, the store offers high-quality items from food and toys to grooming supplies. As the pet industry continues to grow, Smart Pet Depot sought to enhance its online presence and increase sales through effective digital marketing strategies."/>
   <Objective/>
   <Challenge/>
   <Solution/>
   <Result/>
   </>
  )
}

export default page