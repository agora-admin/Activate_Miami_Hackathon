import styled from "styled-components";
import YourCom from '../components/YourCom/YourCom';
import ExploreCom from "../components/ExploreCom/ExploreCom";
import CardMain2 from "../components/Card/CardHero2";
import SidebarRight from "../components/SidebarRight/SidebarRight";
import ProposalCards from "../components/ProposalCards/ProposalCards";
import CardDiscovery2 from '../components/Card/CardDiscovery2';

const MainSection = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// // border: 4px solid green;
// background: yellow;
// margin: 0 1rem;

`;

const Header = styled.h3`
  // font-size: 0.75rem;
  // margin: 1rem 1rem 1.5rem 1rem;
  margin: 1.5rem 0 1rem 0;
  // width: 25rem;
  // border: 1px solid black;
  // font-weight: 600;
  // margin-top: 1rem;
  margin: 2rem 0;
`;

export default function Proposal() {
  return(
    <div>
    <CardMain2/>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Header id='bodyheader3'>Attendance Badges</Header>
      </div>
    <ProposalCards/>
    <ProposalCards/>
    </div>
  )
}