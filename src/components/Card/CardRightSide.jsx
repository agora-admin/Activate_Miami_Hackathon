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
  height: 20rem;
  width: 15.5rem;
  height: 15rem;
  background: white;
  border: 1px solid black;
  border-radius: .75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
  padding: 2rem 1.5rem;
  // margin: 3rem 0;
  background-image: linear-gradient(#98dddf 0%, #e198ad 100%);

`;

const CardImage3 = styled.div`
  width: 25%;
  height: 33%;
  background: blue;
  // margin: 1rem;
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-start;
`;

const CardInfo = styled.div`
  // border: 1px solid red;
  margin-right: 1rem;
  // height: 100%;
  // width: 100%;
`;

const CardHeader = styled.h3`
  // font-size: 1.5rem;
  // margin: 1rem 0;
`;

const CardSubheader = styled.h5`
  // font-size: 1rem;
  // margin: 1rem 0;
`;

const CardText = styled.div`
  font-size: 1rem;
`;

export default function CardRightSide(props) {
  return (
    <>
      <Cards3>
        {props.children}
        {/* hey
      <CardImage3>hey</CardImage3>
        <CardInfo>
          <CardHeader>Start your own community</CardHeader>
          <CardSubheader>Create a DAO and invite your peers etc etc</CardSubheader>
          <CardText>Body</CardText>
      </CardInfo>
      <Button>Create a Community</Button> */}
      </Cards3>

    </>
  );
}