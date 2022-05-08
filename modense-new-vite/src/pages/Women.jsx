import { Slidingnew } from '../components/womencomponents/Slidingnew'
import { Bhead } from '../components/Bhead'
import { Brand } from '../components/Brand'
import Slide from '../components/womencomponents/Slider'
import { Trending } from '../components/Trending'
import  SlideItem  from '../components/womencomponents/trendNew'
import  RecentView  from '../components/womencomponents/recentlyViewed'
import CommunityPost from "../components/womencomponents/communityPosts"
import { Bottom } from '../components/Bottom'
import {NavbarCouponSlider} from "../components/NavbarCouponSlider"
import {NavBar} from "../components/NavBar"
import {CloseIcon} from "@chakra-ui/icons"
import {useState} from "react";
import {Login} from "../components/Login"
import {SignUp} from "../components/SignUp"
import {Footer} from "../components/Footer"
import "./Home.css";
export const WomenPageBrand = () => {

  const [show, setShow] = useState(true);
  
  const [isShowLogin, setIsShowLogin] = useState(true);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  return (
    <>
    {show ? <NavbarCouponSlider /> : null}
        <button className="navbarCouponBtn" onClick={()=>{setShow(!show)}}><CloseIcon/></button>
        <NavBar handleLoginClick={handleLoginClick}/>
        {/* <Login  isShowLogin={isShowLogin}/> */}
        <SignUp isShowLogin={isShowLogin}/>
        
      <Slidingnew />
      <Bhead />
      <Brand />
      <Slide />
      <Trending trend={"Trending Now"}/>
      <SlideItem />
      <Trending trend={"Recently Viewed"}/>
      <RecentView />
      <Trending trend={"Community Posts"}/>
      <CommunityPost />
      <Bottom />
      <Footer/>
    </>

  )

}