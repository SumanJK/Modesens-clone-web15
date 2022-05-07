import { Slidingnew } from '../components/womencomponents/Slidingnew'
import { Bhead } from '../components/Bhead'
import { Brand } from '../components/Brand'
import Slide from '../components/womencomponents/Slider'
import { Trending } from '../components/Trending'
import { Trendingbot } from '../components/Trendingbot'
import { trenddata } from "../data/trend";
import { Community } from '../components/womencomponents/Community'
import { Communitydown } from "../components/womencomponents/Communitydown"
import { Bottom } from '../components/Bottom'

export const WomenPageBrand = () => {

  return (
    <>
      <Slidingnew />
      <Bhead />
      <Brand />
      <Slide />
      <Trending />
      <Trendingbot value={trenddata}/>
      <Community />
      <Communitydown />
      <Bottom />
    </>

  )

}