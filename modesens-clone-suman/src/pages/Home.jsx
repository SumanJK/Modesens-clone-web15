import {NavbarCouponSlider} from "../components/NavbarCouponSlider"
import {NavBar} from "../components/NavBar"
import {CloseIcon} from "@chakra-ui/icons"
import {useState} from "react";
import "./Home.css";

export const Home = () => {

  const [show, setShow] = useState(true);

  return (
    <div>
        {show ? <NavbarCouponSlider /> : null}
        <button className="navbarCouponBtn" onClick={()=>{setShow(!show)}}><CloseIcon/></button>
        <NavBar/>
    </div>
  )
}
