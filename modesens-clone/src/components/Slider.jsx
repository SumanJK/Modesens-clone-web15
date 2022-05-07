import React from "react";
import range from "lodash/range";
import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import {branditem} from "../data/ima.js"
const noOfItems = 12;
const noOfCards = 3;
const autoPlayDelay = 2000;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom:100px;
`;

const SlideItem = styled.img`
  height: 300px;
  width:100%;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  
`;

const carouselItems = branditem.map(e => (
  <button style={{border:"none"}}> 
  <SlideItem src={e.src} />
  <h5 style={{fontSize:"18px",textAlign:"center"}}>{e.heading}</h5>
  <p style={{fontSize:"15px",textAlign:"center"}}>{e.sub}</p>
  <button style={{fontSize:"18px",paddindBottom:"50px"}}>{e.btntitle}</button>
   </button>
   
));

export default class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () =>
    this.setState(prevState => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1)
    }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={<button style={{border:"none",background:"white"}}>{">"}</button>}
          leftChevron={<button style={{border:"none",background:"white"}}>{"<"}</button>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
      </Wrapper>
    );
  }
}
