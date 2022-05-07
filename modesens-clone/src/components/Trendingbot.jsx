import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "../style/women/community.css";

const Card = ({ ele }) => (
  <div className="card">
    <div className="col1">
    <img src={ele.src} alt="img" />
    </div>
   <div className="text1">
   <h1>{ele.title}</h1>
    <p>{ele.sub}</p>
    <h2>{ele.rate}</h2>
    <p>{ele.st}</p>
   </div>
   
  </div>
);


export const Trendingbot = ({value})=> {
  return (
    <div className="container">
     
      <ReactCaroussel slidesToShow={4} slidesToScroll={1} infinite={true}>
        {value
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
