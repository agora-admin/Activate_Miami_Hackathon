import styled from "styled-components";
import React from 'react';

const CardImageDisc = styled.div`
  height: 3rem;
  min-width: 3rem;
  max-width: 3rem;
  border-radius: 20%;
  background: purple;
  margin-right: .5rem;
  
`;

const CardInfoDisc = styled.div`
  // border: 4px solid red;
  // margin: 1rem 0 0;
  // height: 45%;
  // height: fit-content;
  width: 90%;
  // background: red;
 
  // margin-top: .25rem;
`;

const Cards2 = styled.div`
  width: 13rem;
  min-height: 12rem;
  max-height: 12rem;
  background: white;
  border: 1px solid black;
  border-radius: 0.75rem;
  padding: 8.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 4px 4px rgba(0, 0, 0, 1);
  background: linear-gradient(
    #e1d198 0%,
    #e1d198 65%,
    #98dddf 50%,
    #98dddf 100%
  );
  margin: 0 0 1rem 0;
`;

const CardHeader = styled.h4`
  // font-size: 1.1rem;
  // margin: .25rem 0;
`;

const CardScheduledCopy2 = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardSuperText = styled.div`
 
`;

export default function CardDisc() {
  return (
    <>
      <Cards2>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
     
        {/* <div style={{margin: '0 0 1rem 0', display: 'flex', justifyContent: 'flex-start', alignItems:'center'}}> */}
        <div style={{ width: '100%'}}>
        <CardHeader id='cardheader2'>DAO Name</CardHeader>

        <CardSuperText id='supertext2'>Assembly</CardSuperText>
        </div>
        <CardSuperText id='supertext2'>Date</CardSuperText>
        </div>
        {/* </div> */}
        {/* <div style={{display: 'flex', flexDirection: 'column'}}>
        <CardTypeDisc>Discourse</CardTypeDisc>
        </div> */}
        
        <CardInfoDisc>
          {/* <CardHeaderDisc>Event Title</CardHeaderDisc> */}
          
        </CardInfoDisc>
      </Cards2>
    </>
  );
}