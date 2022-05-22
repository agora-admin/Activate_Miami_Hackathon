import styled from "styled-components";
import YourCom from "../components/YourCom/YourCom";

const MainSection = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // // border: 4px solid green;
  // background: yellow;
  // margin: 0 1rem;
`;

const Text = styled.p`
  font-size: 0.75rem;
  margin: 0;
  // margin: 1rem 1rem 1.5rem 1rem;
  width: 25rem;
  border: 1px solid black;
  font-weight: 600;
`;


const Input = styled.input`
  width: 18rem;
  // margin: 0 1rem;
  border-radius: 3rem;
  // height: 2.5rem;
  // padding: 0.5rem 1rem;
  // align-text: center;
  background: #e1d198;
`;

const Header = styled.h3`
  // font-size: 0.75rem;
  // margin: 1rem 1rem 1.5rem 1rem;
  // margin: 1.5rem 0 1rem 0;
  // width: 25rem;
  // border: 1px solid black;
  // font-weight: 600;
  margin-top: 1rem;
  // margin: 1rem 0;
  // margin: 0;
`;

const CardSubheader = styled.p`
  // margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function Discovery() {
  return (
    <>
      <Header id='discoheader'>Your Communities</Header>
      <CardSubheader className='subheader'>
        Communities you are a member of
      </CardSubheader>
      <YourCom />
      <div
        style={{
          margin: "2rem 0 0 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Header id='discoheader'>Explore Communities</Header>
          <CardSubheader className='subheader2'>
            Discover trending communities
          </CardSubheader>
        </div>
        <Input
          className='button'
          id='searchbar'
          placeholder='Find the communities of interest'
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <YourCom />
      </div>
      <YourCom />
    </>
  );
}
