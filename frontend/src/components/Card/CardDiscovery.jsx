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
  width: 12rem;
  min-height: 9.5rem;
  max-height: 9.5rem;
  background: white;
  border: 1px solid black;
  border-radius: 0.75rem;
  padding: 1rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #98dddf;
  box-shadow: 4px 4px rgba(0, 0, 0, 1);
`;

const CardHeader = styled.h4`
  // font-size: 1.1rem;
  margin: .25rem 0;
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
      {/* <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid red', marginBottom: '1rem'}}> */}
     
        <div style={{margin: '0 0 1rem 0', display: 'flex', justifyContent: 'flex-start', alignItems:'center'}}>
        <CardImageDisc></CardImageDisc>
        <div style={{ width: '100%'}}>
        <CardSuperText id='supertext'>Category</CardSuperText>
        <CardHeader id='cardheader'>daoName</CardHeader>
        </div>
        </div>
        {/* <div style={{display: 'flex', flexDirection: 'column'}}>
        <CardTypeDisc>Discourse</CardTypeDisc>
        </div> */}
        
        <CardInfoDisc>
          {/* <CardHeaderDisc>Event Title</CardHeaderDisc> */}
          <CardScheduledCopy2 className='cardcopy'>
            Apollonius of Perga sed quia non numquam eius modi tempora incidunt
            ut labore et dolore. Apollonius of Perga sed quia non numquam eius modi tempora incidunt
            ut labore et dolore.
          </CardScheduledCopy2>
        </CardInfoDisc>
      </Cards2>
    </>
  );
}