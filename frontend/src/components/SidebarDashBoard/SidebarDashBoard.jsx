import styled from "styled-components";
import CardLeft from "../Card/CardLeft";
import CardLeft2 from "../Card/CardLeft2";

const Text2 = styled.p`
  font-size: 0.75rem;
  border: 1px solid black;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export default function SidebarDashBoard() {
  return (
    <>
      <div>
        <CardLeft />
      </div>
      <div>
        <CardLeft2 />
      </div>
    </>
  );
}
