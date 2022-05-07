import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "../style/trending.css";
import { branditem } from "../data/ima";
const Card = ({ ele }) => (
  <div className="card" style={{border: "1px solid red"}}>
    <img src={ele.src} alt="img" height="300px" width="100%" />
    {/* <h1>{ele.heading}</h1>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <button>Read more</button> */}
  </div>
);

export const Trending = ()=> {
  return (
    <div className="container" style={{border:"1px solid red"}}>
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
