import styled from "styled-components";
import Button from "../Buttons/Buttons";

const CardHero = styled.div`
  padding: 2rem 0.25rem 1rem;
  width: 100%;
  height: 15rem;
  background: linear-gradient(
    #e1d198 0%,
    #e1d198 45%,
    #98dddf 45%,
    #98dddf 100%
  );
  // margin: 0 0 1rem 0;
`;

const CardImageHero = styled.div`
  height: 7rem;
  width: 7rem;
  margin: 0 0 .5rem 1.2rem;
  border-radius: 1rem;
  background: white;
  border: 1px solid black;
`;

const CardInfoHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  // align-items: bottom;
  width: 75%;
  margin: 0 1.55rem 0.5rem 1.55rem;
  // border: 1px solid black;
`;

const CardHeader = styled.h3`
  margin: 0.1rem 0;
`;

const CardSubheader = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardValue = styled.h2`
  margin: 0;
  width: 12rem;
`;

export default function CardMain() {
  return (
    <>
      <CardHero id='card'>
        <div
          style={{ display: "flex",
          flexDirection:"row",
          justifyContent: "flex-start",
          alignItems: "end",
          padding: ".5rem 0"
        }}
        >
          <CardImageHero></CardImageHero>
        <CardInfoHero>
          <CardHeader className='cardheader'>John Doe</CardHeader>
          <CardSubheader className='subheader'>
            All about that crypto lyfe.
          </CardSubheader>
        </CardInfoHero>
      </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // border: "1px solid blue",
            margin: "0 1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                // display: "flex",
                flexDirection: "column",
                // border: "1px solid purple",
              }}
            >
              <CardValue className='cardhero-value'>9000+</CardValue>
              <CardSubheader className='subheader'>
                NFT Collected
              </CardSubheader>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardValue className='cardhero-value'>88</CardValue>
              <CardSubheader className='subheader'>Followers</CardSubheader>
            </div>
          </div>
          <div>
            <Button>Follow</Button>
          </div>
        </div>
        {/* </div> */}
      </CardHero>
    </>
  );
}
