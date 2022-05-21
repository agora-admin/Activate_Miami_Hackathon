import styled from "styled-components";
import CardLeft from "../Card/CardLeft";

const MainSection = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // // border: 4px solid green;
  // background: yellow;
  // margin: 0 1rem;
`;

export default function SidebarDashBoard() {
  return (
    <>
      <CardLeft />
      <CardLeft />
    </>
  );
}