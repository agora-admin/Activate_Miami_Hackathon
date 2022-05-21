import styled from "styled-components";
import Buttons from "../Button/Button";
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

const CardHero = styled.div`
  width: 100%;
  height: 18rem;
  // height: 8rem;
  background: white;
  border: 1px solid black;
  border-radius: 0.75rem 0.75rem 0 0;
  // display: flex;
  // padding: 1.5rem;
  margin: 0 0 3.5rem 0;
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

const CardImageHero = styled.div`
  // min-height: 100%;
  height: 40%;
  width: 100%;
  margin-right: 1rem;
  border-radius: 0.75rem 0.75rem 0 0;
  background: black;
  // margin: 1rem;
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-start;
`;

const CardInfoHero = styled.div`
  border: 1px solid red;
  // margin: 1rem 0 0;
  // height: 45%;
  width: 75%;
  // height: 5rem;
  // background: red;
  margin: 1.5rem;
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
  // margin-right: 5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  // line-height: 1.5rem;
`;

const CardSubheader6 = styled.h6`
  // font-size: 1rem;
  // margin: 1rem 0;
  // margin: .25rem;
  margin: 0;
  width: 12rem;
  // margin-right: 5rem;
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

export default function CardMain() {
  return (
    <>
      {/* <div style={{ border: "1px solid black" }}> */}
      <CardHero>
        <CardImageHero></CardImageHero>
        <CardInfoHero>
          <CardHeader2>Kendall DAO</CardHeader2>
          <CardSubheader2>
            Kendall DAO brings the people of Kendall together!
          </CardSubheader2>
        </CardInfoHero>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // border: "1px solid blue",
            margin: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // border: "4px solid purple",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // border: "1px solid purple",
              }}
            >
              <CardSubheader6>$15.3k</CardSubheader6>
              <CardSubheader6>Total Value Locked</CardSubheader6>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // border: "1px solid orange",
              }}
            >
              <CardSubheader6>36,000</CardSubheader6>
              <CardSubheader6>Members</CardSubheader6>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              
              // border: "4px solid green",
            }}
          >
            <Buttons>Join</Buttons>
          </div>
        </div>
      </CardHero>
    </>
  );
}
