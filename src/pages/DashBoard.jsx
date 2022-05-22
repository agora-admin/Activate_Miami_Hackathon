import styled from "styled-components";
import Scheduled from "../components/Scheduled/Scheduled";
import ExploreCom from "../components/ExploreCom/ExploreCom";
import CardMain from "../components/Card/CardHero";
import Button from '../components/Buttons/Buttons';

const Text = styled.p`
  font-size: 0.75rem;
  // margin: 1rem 1rem 1.5rem 1rem;
  // width: 25rem;
  border: 1px solid black;
  font-weight: 600;
  // margin-top: 1rem;
`;

const Header = styled.h3`
  // font-size: 0.75rem;
  // margin: 1rem 1rem 1.5rem 1rem;
  margin: 1.5rem 0 1rem 0;
  // width: 25rem;
  // border: 1px solid black;
  // font-weight: 600;
  // margin-top: 1rem;
  margin: 1rem 0;

`;

export default function DashBoard() {
  return (
    <div>
      <CardMain />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Header id='bodyheader'>Scheduled Assemblies</Header>
        <Button>+ Propose Assembly</Button>
      </div>
      <Scheduled />
      <Header id='bodyheader'>Pending Approval</Header>
      <ExploreCom />
    </div>
  );
}
