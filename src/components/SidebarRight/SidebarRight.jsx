

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
import SidebarDashBoard from "../SidebarDashBoard/SidebarDashBoard";



const MainSection = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// // border: 4px solid green;
// background: yellow;
// margin: 0 1rem;

`;


export default function SidebarRight() {
  return(
    <>
    
      <Switch>
      {/* <div className='App4' style={{margin: '0 0 0 2.5rem', border: '4px solid red', maxWidth: '16rem', display:'flex', flexDirection:'column'}}> */}
      <Route path='/dashboard' exact component={SidebarDashBoard} />

      <Route path='/proposal' exact component={SidebarDashBoard} />
{/* </div> */}
      <div className='App4' style={{margin: '0', border: '4px solid red', maxWidth: '16rem', display:'flex', flexDirection:'column'}}>

      {/* <Route path='/discovery' exact component={Discovery} /> */}
      </div>
      </Switch>
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
    
    </>
  )
}
