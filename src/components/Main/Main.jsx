import styled from "styled-components";
// import Card from "../Card/Card";
// import CardHorizontal from "../Card/CardHorizontal";
// import CardLeft from '../Card/CardLeft';
// import Text from "../Text/TextHeader";
// import CardScheduled from '../Card/CardScheduled';
// import CardPending from '../Card/CardPending';
// import NavBar from '../NavBar/NavBar';
// import CardWide from '../Card/CardWide';
// import YourCom from "../YourCom/YourCom";
// import ExploreCom from "../ExploreCom/ExploreCom";
// import CardMain from "../Card/CardHero";
import { Switch, Route } from "react-router-dom";
import Discovery from "../../pages/Discovery";
import HomePage from "../../pages/HomePage";
import DashBoard from "../../pages/DashBoard";
import SidebarRight from "../SidebarRight/SidebarRight";
import Proposal from "../../pages/Proposal";

const MainSection = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// // border: 4px solid green;
// background: yellow;
// margin: 0 1rem;

`;


export default function Main() {
  return(
    <MainSection>
      <Switch>
      <Route path='/dashboard' exact component={DashBoard} />
      <Route path='/proposal' exact component={Proposal} />

      <Route path='/discovery' exact component={Discovery} />
      </Switch>
      {/* <div className='App4' style={{border: '4px solid red', width: '16rem', display:'flex', flexDirection:'column'}}> */}

 

      {/* <CardWide/> */}
      {/* <Footer /> */}
    {/* </div> */}
    {/* <MainSection> */}
    
    {/* <NavBar></NavBar> */}
    {/* <Card/> */}
    
    {/* <CardHorizontal/>
    <CardWide/> */}

    {/* <CardHorizontal/>
    <CardHorizontal/> */}
    {/* </MainSection> */}
{/*     
    <div style={{display: "flex"}}>
    <CardWide/>
    <CardWide/>
    <CardWide/>
    </div> */}

    {/* <CardScheduled />
    <CardPending />  */}
      {/* <Text/> */}
    
    </MainSection>
  )
}