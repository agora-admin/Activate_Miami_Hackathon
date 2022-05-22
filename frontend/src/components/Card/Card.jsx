import styled from "styled-components";
import Button from '../Buttons/Buttons';

const Cards = styled.div`
  height: 25rem;
  width: 18rem;
  background: white;
  border: 1px solid black;
  border-radius: .75rem;
  // display: flex;
  padding: 1.5rem;
`;

const Cards3 = styled.div`
  height: 23rem;
  width: 25rem;
  background: white;
  border: 1px solid black;
  border-radius: .75rem;
  // display: flex;
  padding: 1.5rem;
`;

const CardImage = styled.div`
  width: 100%;
  height: 50%;
  background: blue;
  // margin: 1rem;
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-start;
`;

const CardInfo = styled.div`
  // border: 1px solid red;
  margin: 1rem 0 0;
  height: 45%;
  width: 100%;
`;

const CardHeader = styled.h3`
  // font-size: 1.5rem;
  // margin: 1rem 0;
`;

const CardSubheader = styled.h5`
  font-size: .75rem;
  // margin: 1rem 0;
`;

const CardText = styled.div`
  font-size: 1rem;
`;

export default function Card() {
  return (
    <>
      <Cards>
        <CardImage>hey</CardImage>
        <CardInfo>
          <CardHeader>Martha</CardHeader>
          <CardSubheader>Subtext</CardSubheader>
          <CardText>Body</CardText>
        </CardInfo>
      </Cards>

    </>
  );
}
