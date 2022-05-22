import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
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
      <Route path='/dashboard' exact component={SidebarDashBoard} />
      <Route path='/proposal' exact component={SidebarDashBoard} />
      </Switch>
    </>
  )
}
