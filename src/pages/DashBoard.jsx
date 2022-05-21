import styled from "styled-components";
import YourCom from '../components/YourCom/YourCom';
import ExploreCom from "../components/ExploreCom/ExploreCom";
import CardMain from "../components/Card/CardHero";
import SidebarRight from "../components/SidebarRight/SidebarRight";
const MainSection = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// // border: 4px solid green;
// background: yellow;
// margin: 0 1rem;

`;


export default function DashBoard() {
  return(
    <div>
    {/* // <div style={{border: '4px solid red', display: 'flex'}}> */}
    <MainSection>
    <CardMain/>
    <YourCom/>
    <ExploreCom/>
    {/* <div style={{border: '4px solid blue'}}> */}

    {/* <SidebarRight/> */}
    {/* </div> */}
    {/* <NavBar></NavBar> */}
    {/* <Card/> */}
    
    {/* <CardHorizontal/>
    <CardWide/> */}

    {/* <CardHorizontal/>
    <CardHorizontal/> */}
    </MainSection>
{/*     
    <div style={{display: "flex"}}>
    <CardWide/>
    <CardWide/>
    <CardWide/>
    </div> */}

    {/* <CardScheduled />
    <CardPending />  */}
      {/* <Text/> */}
    </div>
    // </div>
  )
}