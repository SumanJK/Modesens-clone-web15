import "../style/women-page-brand.css";

import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import "../style/women-page-brand.css";

export const WomenPageBrand = () => {

   
           {/* <button> <img src="https://images.pexels.com/photos/8050084/pexels-photo-8050084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> </button>
           <button> <img src="https://images.pexels.com/photos/7615247/pexels-photo-7615247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> </button>
           <button> <img src="https://images.pexels.com/photos/1426191/pexels-photo-1426191.jpeg" alt="" /> </button> 
           */}



  
  const SubMain = styled(Carousel)`
    & .carousel-control-prev-icon,
    .carousel-control-next-icon {
      padding: 10%;
      border-radius: 50%;
      background-color: black;
    }
  `
  
  return (
    <div className="container">
    <div className="img_card">
      <h3>Today's Hot picks</h3>
      <SubMain >
      

        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex" }} className="paru">
        
            
<div ><img  src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/Undekhi_S2_1_Master_portrait_thumb.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/videoasset_images/Salute_New_No2_Master_portrait_thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/RockeyBoys_3_Master_portrait_thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/DYG_4_Master_portrait_thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/Gullak_S2_5_Master_portrait_thumb.jpg"/></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Scam_No6_Master_portrait_thumb.jpg" alt="" /></div>
<div ><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/KV_7_Master_portrait_thumb.jpg" alt="" /></div>
          </div>
        </Carousel.Item>



        <Carousel.Item interval={1500}>
        <div style={{height:"280px",width:"100%",color:"white",display:"flex"}} className="paru">
            
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Maharani_No8_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/YourHonor_No9_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/Tabbar_No10_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/KV_7_Master_portrait_thumb.jpg" alt="" /></div>
<div><img src="https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,h_474,q_auto:low,w_316/e_brightness:10/https://origin-staticv2.sonyliv.com/UI_icons/Multipurposecards/Carousel_Portrait_Card/DYG_4_Master_portrait_thumb.jpg" alt="" /></div>

          </div>
        </Carousel.Item>
        
      </SubMain>

        </div>
        </div>
    )
}