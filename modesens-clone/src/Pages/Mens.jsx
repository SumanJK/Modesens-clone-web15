import {Slidingnew} from "../components/mencomponents/Slidingnew"
import { Bhead } from "../components/Bhead";
import { Brand } from "../components/Brand";
import { Trending } from "../components/Trending";
import { Trendingbot } from "../components/Trendingbot"
import Slide from "../components/mencomponents/Slider"
import { Community } from "../components/mencomponents/Community";
import { Communitydown } from "../components/mencomponents/Communitydown";
import {Bottom} from "../components/Bottom"
import { trenddata } from "../data/mentrend";
export const Mens = () => {

  return (
    <>
      <Slidingnew />
       <Bhead />
      <Brand /> 
      <Slide/>
      <Trending />
      <Trendingbot value={trenddata}/>
       <Community />
      <Communitydown />
      <Bottom /> 
    </>

  )

}