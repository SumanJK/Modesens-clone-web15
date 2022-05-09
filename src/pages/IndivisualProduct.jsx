import styled from "styled-components";
import {Footer} from "../components/Footer";
import {NavBar} from "../components/NavBar";
import { useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import { Trending } from '../components/Trending'
import  RecentView  from '../components/womencomponents/recentlyViewed'
import CommunityPost from "../components/womencomponents/communityPosts"
import { Bottom } from '../components/Bottom'
import {useContext} from "react";
import {GenderContext} from "../contexts/userGender"
import {NavbarCouponSlider} from "../components/NavbarCouponSlider"
// import {NavBar} from "../components/NavBar"
import {CloseIcon} from "@chakra-ui/icons";
import {Login} from "../components/Login"
import {SignUp} from "../components/SignUp"
// import { useParams } from "react-router-dom";
import axios from "axios"
const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 50px;
 
/* border: 1px solid red; */
`
const InnerWrapper = styled.div`
 display: flex;
 flex-direction: column;
/* border: 1px solid green; */
width: 85%;
padding: 100px 0;
margin: auto;
/* height: 400px; */
`
const Path = styled.h5`
    /* border: 1px solid blue; */
    letter-spacing:.7px;
    width: 100%;
    height: 20px;
    /* padding:10px 0; */
    margin-bottom: 10px;
`
const PicInfo = styled.div`
  display: flex;
  justify-content:space-evenly;
`
const LeftDiv= styled.div`
   width: 110px;
`
const Img= styled.img`
    vertical-align : middle; 
    max-width : 100%; 
    max-height : 100%; 
    cursor : pointer; 
    transition: all 0.5s ease;
`
const SliderWrapper= styled.div`
    width: 110px;
  /* border: 1px solid cyan; */
  /* box-sizing : border-box;  */
    /* border: 1px solid black; */
    height: 360px;
    overflow: hidden;
   /* border-width: 2px; */
`
const SideImgDiv= styled.div`
  cursor : pointer; 
  box-sizing : border-box; 
    display : flex; 
    justify-content : center;
    margin: 4px 0;
    width : 100%;
    height :30% ;
    opacity : 0.6;
    transition: all 0.5s ease;
    border: 1px solid gray;
    overflow: hidden;
    &:hover{
      opacity : 1;
    }
    &:hover ${Img}{
      
      transition: all 0.5s ease;
        -webkit-transform: scale(1.2);
  transform: scale(1.2);
    }


`

const SideImgArrow= styled.div`
      box-sizing : border-box; 
    cursor : pointer; 
    width : 110px; 
    height : 20px; 
    background : rgba(0, 0, 0, 0) url("https://modesens.com/static/img/slidertop_hover.svg") no-repeat scroll 50% 50% / 15% padding-box border-box; 
/* border: 2px solid black; */
margin: 2px;
`
const CenterDiv = styled.div`
position: relative;
      /* box-sizing : border-box;  */
    cursor : pointer; 
    display : flex; 
    justify-content : center; 
    align-items : center; 
    width : 503px; 
    height : 350px; 
    padding : 10px; 

`
const ImgDiv = styled.div`
    /* box-sizing : border-box;  */
    cursor : pointer; 
    display : flex; 
    justify-content : center; 
    align-items : center; 
    width : 533px; 
    height : 350px; 
    padding : 10px; 
`

const LogoDiv = styled.div`
    display : flex; 
    flex-wrap : wrap; 
    justify-content : space-around; 
    align-items : flex-start; 
    position : absolute; 
    top : 10px; 
    right : 16px; 
    width : 30px; 
    height : 70px; 

`
const RightDiv = styled.div`
    display : block; 
    position : relative; 
    width : 505px; 
    padding :0 35px; 
  /* border: 2px solid seagreen;  */
`
const Title= styled.div`
  font-weight: 600;
  font-size:19px;
  letter-spacing:1px;

`
const Desc= styled.div`
  font-size: 15px;
  padding:10px 0;
  font-weight:500;
`
const PriceDiv= styled.div`
  display: flex;
  /* border: 1px solid red; */
  max-width: 55%;
  justify-content: space-between;
  margin: 10px 0;
`
const Price= styled.div`
  font-weight: 500;
  font-size:18px
`
const PriceAlert= styled.div`
  color: gray;
  width: 50%;

  &:hover{
    color: black;
    text-decoration: underline;
    cursor: pointer;
  }
`
const AdditionalDesc= styled.div`
  padding: 4px 0;
  /* border: 1px solid cyan; */
  /* width: 100%; */
  text-decoration: underline;
  font-weight: 500;
`
const BuyButton= styled.button`
  /* border: none; */
  background-color:black;
  color: white;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-weight: bolder;
  letter-spacing:1px;
  word-spacing:2px;
  margin: 10px 0;
  cursor : pointer;
  border: none;
`
const PointsDiv= styled.div`
  display: flex;
  flex-wrap: wrap;
  padding:2px 0;
  width: 100%;

`
const Points= styled.div`
font-weight: 500;
font-size:15px
`
const LearnMore= styled.u`
  color: gray;
  &:hover{
    color: black;
    cursor: pointer;
  }
`

const IndivisualProduct = ({value}) => {

console.log(value,"value")
  /* const {id}= useParams() */
    var currentLocation = window.location.pathname;
    const location= "Home" +  currentLocation;
    const loc= location.split("/")
    
    const locat= `${loc[0]}/${loc[1]}`
    console.log(locat)

/* 
 const {genderSet} =useContext(GenderContext)

 if(genderSet){

   localStorage.setItem("genderData", genderSet);
 }
 const gender= localStorage.getItem("genderData");
console.log("fend",gender) */


/* const {handleFire,handlePromote} =useContext(EmploeeDataContext) */

/* useEffect(()=>{
  getdata();
},[]) 
const {id}= useParams()

  async function getdata (){
    console.log("data",id)
      let datas= await fetch(`https://modesense-masai.herokuapp.com/${value}/${id}`);

      let data= await datas.json();
      setuserDt(data);
    console.log("ddd",data)
  } */
  const[user,setUser]= useState([])
  useEffect(()=>{

  const userer= JSON.parse(localStorage.getItem("IndData"));
  /* console.log("userer",userer) */
  setUser(userer)
  },[])
console.log(user,"fjf")
/* 
  {
          "id": "6247c11f5212f7613b282b52",
          "image1": "https://sslimages.shoppersstop.com/sys-master/images/ha1/h72/17550891909150/A21VFSUPCRWBL_BLACK_alt1.jpg_1088Wx1632H",
          "image2": "https://sslimages.shoppersstop.com/sys-master/images/hc3/h5c/17550856880158/A21VFSUPCRWBL_BLACK_alt2.jpg_1088Wx1632H",
          "image3": "https://sslimages.shoppersstop.com/sys-master/images/h0f/hba/17550828666910/A21VFSUPCRWBL_BLACK.jpg_1088Wx1632H",
          "image4": "https://sslimages.shoppersstop.com/sys-master/images/hfc/h63/17550888763422/A21VFSUPCRWBL_BLACK_alt3.jpg_1088Wx1632H",
          "image5": "https://sslimages.shoppersstop.com/sys-master/images/hf9/ha0/17550844133406/A21VFSUPCRWBL_BLACK_alt4.jpg_1088Wx1632H",
          "BrandName": "Fratini",
          "ProductName": "Solid Cotton Stretch Regular Fit Mens T-Shirt",
          "Price": 499,
          "strikeoffPrice": 999,
          "offer": "Buy Any 1 Of Selected Products And Get 50% Off",
          "countryOrigin": "India",
          "Sleeves": "Half Sleeves",
          "Fit": "Regular",
          "Neckline": "crew",
          "Pattern": "Solid",
          "Fabric": "Cotton Stretch",
          "PackOf": "Pack of 1",
          "Occasion": "Casual",
          "Collar": "Regular"
        }) */




  

  return (
    <Container>

      <Wrapper>
        <InnerWrapper>
            <Path>{locat}</Path>
            <PicInfo>
              <LeftDiv>
                <SliderWrapper>
                  <SideImgDiv><Img src={user.image_url}/></SideImgDiv>
                  <SideImgDiv><Img src={user.image_url}/></SideImgDiv>
                  <SideImgDiv><Img src={user.image_url}/></SideImgDiv>
                  <SideImgDiv><Img src={user.image_url}/></SideImgDiv>
                  <SideImgDiv><Img src={user.image_url}/></SideImgDiv>
                </SliderWrapper>
                <SideImgArrow/>
              </LeftDiv>
              <CenterDiv>
                <ImgDiv>
                  <Img src={user.image_url}/>
                </ImgDiv>
              
                <LogoDiv>
                  <Img src= "https://modesens.com/static/img/20210601heart_hover.svg"/>
                  <Img src= "https://cdn.modesens.com/static/img/prd_share1.svg"/>
                </LogoDiv>
              </CenterDiv>
              <RightDiv>
                <Title>{user.brand}</Title>
                <Desc>{user.title}</Desc>
                <PriceDiv>
                  <Price>₹{user.price} - ₹{user.offprice}</Price>
                  <PriceAlert onClick={()=>{alert("Your Alert has been set")}}>Set Alert</PriceAlert>
                </PriceDiv>
                <AdditionalDesc>Shop From 8 Stores</AdditionalDesc>
                <a href={user.href} target="_blank"><BuyButton>SELECT STORE TO BUY</BuyButton></a>
                <PointsDiv>
                  <Points>{user.offer} </Points> &nbsp; &nbsp; 
                  <LearnMore> Learn more</LearnMore>
                </PointsDiv>
              </RightDiv>
            </PicInfo>
        </InnerWrapper>
      </Wrapper>
      <Trending trend={"Recently Viewed"}/>
      <RecentView />
      <Trending trend={"Community Posts"}/>
      <CommunityPost />
      <Bottom />
    </Container>
  );
};

export default IndivisualProduct;
