import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "../../style/women/community.css";
import { branditem } from "../../data/ima";
const Card = ({ ele }) => (
  <div className="card">
    <img src={ele.src} alt="img" height="300px" width="100%" />
    {/* <h1>{ele.heading}</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <button>Read more</button> */}
  </div>
);

export const Communitydown = ()=> {
  return (
    <div className="container">
     
      <ReactCaroussel slidesToShow={4} slidesToScroll={1} infinite={true}>
        {branditem
          .map((ele, index) => (
            <Card key={index} ele={ele} />
          ))}
      </ReactCaroussel>

      {/* <h3 className="mt-5">React Carousel one element</h3>
      <ReactCaroussel
        infinite={true}
        autoplay={true}
        speed={2} // 2s
        display={{
          dots: true,
          arrows: false
        }}
      >
        <Card />
        <Card />
        <Card />
      </ReactCaroussel> */}
    </div>
  );
}
