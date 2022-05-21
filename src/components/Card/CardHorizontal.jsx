import styled from "styled-components";
// const Cards2 = styled.div`
//   width: 25rem;
//   // height: 8rem;
//   background: white;
//   border: 1px solid black;
//   border-radius: .75rem;
//   display: flex;
//   justift-content: center;
//   // align-items: center;
//   padding: 1.5rem;
// `;

const Cards2 = styled.div`
  width: 25rem;
  height: 9rem;
  // height: 8rem;
  background: white;
  border: 1px solid black;
  border-radius: 0.75rem;
  display: flex;
  padding: 1.5rem;
  margin: 0 1rem;
`;

const Cards3 = styled.div`
  width: 35rem;
  height: 9rem;
  background: white;
  border: 1px solid black;
  border-radius: 0.75rem;
  display: flex;
  padding: 1.5rem;
`;

const CardImage2 = styled.div`
  min-height: 100%;
  min-width: 6rem;
  max-width: 6rem;
  margin-right: 1rem;
  border-radius: 1rem;
  background: black;
  // margin: 1rem;
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-start;
`;

const CardInfo2 = styled.div`
  border: 1px solid red;
  // margin: 1rem 0 0;
  // height: 45%;
  width: 75%;
  // background: red;
`;

const CardHeader2 = styled.h4`
  // font-size: 1.5rem;
  // margin: 1rem 0;
  margin: 0.1rem 0;
  // margin: 0;
`;

const CardSubheader2 = styled.h6`
  // font-size: 1rem;
  // margin: 1rem 0;
  // margin: .25rem;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  // line-height: 1.5rem;
`;

const CardSubheader3 = styled.h6`
  // font-size: 1rem;
  // margin: 1rem 0;
  // margin: .25rem;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5rem;
`;

const CardText2 = styled.p`
  // font-size: 1rem;
  // margin: .25rem;
  margin: 0;
`;

export default function CardHorizontal() {
  return (
    <>
    {/* <div style={{ border: "1px solid black" }}> */}
      <Cards2>
        <CardImage2></CardImage2>
        <CardInfo2>
          <CardHeader2>H2 - head</CardHeader2>
          <CardSubheader2>H5 - subhead</CardSubheader2>
          <CardText2>P - copy</CardText2>
        </CardInfo2>
      </Cards2>
    </>
  );
}
