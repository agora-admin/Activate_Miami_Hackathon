import styled from "styled-components";


const Cards2 = styled.div`
  width: 13rem;
  min-height: 7.5rem;
  max-height: 7.5rem;
  background: white;
  border: 1px solid black;
  border-radius: 0.75rem;
  padding: 1rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardMembers = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // align-items: center;
  width: 11rem;
  height: 17rem;
  border: 1px solid black;
  border-radius: 0.75rem;
  padding: 2rem 1.5rem;
  background: #98dddf;
  box-shadow: 4px 4px rgba(0, 0, 0, 1);
`;

const CardImage3 = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: blue;
  border: 1px solid black;
  // margin: 1rem;
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-start;
  box-shadow: 2px 2px rgba(0, 0, 0, 1);
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

const CardHeader4 = styled.h4`
  font-size: 1.1rem;

`;

const CardType = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-end;
  font-size: 0.65rem;
  font-weight: 600;
`;

export default function CardRightSide() {
  return (
    <>
      <CardMembers>
      <CardInfo>
          <CardHeader id='cardheader3'>Past Assemblies</CardHeader>
      </CardInfo>
        {/* <div style={{display: "flex", marginBottom:"2rem"}}> */}
        

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: " 1.2rem 0"
          }}
        >
          <CardType id='supertext'>Assembly</CardType>
          <CardType id='supertext'>20 May, 2020</CardType>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: " 1.2rem"
            
          }}
        >
          <CardType id='supertext'>Assembly</CardType>
          <CardType id='supertext'>20 May, 2020</CardType>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: " 1.2rem"
          }}
        >
          <CardType id='supertext'>Assembly</CardType>
          <CardType id='supertext'>20 May, 2020</CardType>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: " 1.2rem"
          }}
        >
          <CardType id='supertext'>Assembly</CardType>
          <CardType id='supertext'>20 May, 2020</CardType>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: " 1.2rem"
          }}
        >
          <CardType id='supertext'>Assembly</CardType>
          <CardType id='supertext'>20 May, 2020</CardType>
        </div>
        


      
       
      
      </CardMembers>
    </>
  );
}
