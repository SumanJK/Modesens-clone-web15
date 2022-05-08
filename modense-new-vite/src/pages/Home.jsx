import {NavbarCouponSlider} from "../components/NavbarCouponSlider"
import {NavBar} from "../components/NavBar"
import {CloseIcon} from "@chakra-ui/icons"
import {useState} from "react";
import {Login} from "../components/Login"
import {SignUp} from "../components/SignUp"
import "./Home.css";
import {Footer} from "../components/Footer"

export const Home = () => {
  const [show, setShow] = useState(true);
  
  const [isShowLogin, setIsShowLogin] = useState(true);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  return (
    <div>
        {show ? <NavbarCouponSlider /> : null}
        <button className="navbarCouponBtn" onClick={()=>{setShow(!show)}}><CloseIcon/></button>
        <NavBar handleLoginClick={handleLoginClick}/>
        {/* <Login  isShowLogin={isShowLogin}/> */}
        <SignUp isShowLogin={isShowLogin}/>
        <Footer/>
    </div>
  )
}
