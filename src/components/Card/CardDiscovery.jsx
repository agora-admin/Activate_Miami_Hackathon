import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react';

const CardsDisc = styled.div`
  width: 18rem;
  // height: fit-content;
  // height: 12rem;
  min-height: 10rem;
  max-height: 10rem;
  background-image: linear-gradient(#98dddf 0%, #e198ad 100%);
  border: 1px solid black;
  // background: #98dddf;
  border-radius: 0.75rem;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // margin-right: 1.5rem;
  margin-bottom: 3rem;
  box-shadow: 10px 10px 5px rgba(19, 24, 44, 0.4);

  // &:hover {

  // }
    
`;

const CardImageDisc = styled.div`
  height: 4.5rem;
  min-width: 4.5rem;
  max-width: 4.5rem;
  // margin-bottom:  1rem ;
  border-radius: 20%;
  background: black;
  margin-right: 1rem;
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-start;
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

const CardHeaderDisc = styled.h4`
  // font-size: 1.5rem;
  // margin: 1rem 0;
  // margin: 0.25rem 0;
  margin: 0;
  // border: 1px solid blue;
  // padding: .25rem 0 0 0;
  font-size: 1.2rem;
`;


const CardSubheaderDisc = styled.h6`
  // font-size: 1rem;
  // margin: 1rem 0;
  // margin: .25rem;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // word-wrap: break-word;
  // margin: .5rem 0;
  margin: 0;
  display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
// line-height: 1.5rem;


`;

const CardText2 = styled.p`
  // font-size: 1rem;
  // margin: .25rem;
  margin: 0;
`;

const CardLink = styled(Link)`
  color: blue;
  margin: 0;
  
`;

const CardTypeDisc = styled.div`
display: flex;
// flex-direction: row;
justify-content: flex-end;
margin-bottom: .5rem;
`;

export default function CardDisc() {
  return (
    <>
      <CardsDisc>
      {/* <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid red', marginBottom: '1rem'}}> */}
     
        <div style={{display: 'flex', border:'1px solid purple'}}>
        <CardImageDisc></CardImageDisc>
        <div style={{ width: '100%'}}>
        <CardTypeDisc>Regional</CardTypeDisc>
          <CardHeaderDisc>Kendall DAO</CardHeaderDisc>
        </div>
        </div>
        {/* <div style={{display: 'flex', flexDirection: 'column'}}>
        <CardTypeDisc>Discourse</CardTypeDisc>
        </div> */}
        
        <CardInfoDisc>
          {/* <CardHeaderDisc>Event Title</CardHeaderDisc> */}
          <CardSubheaderDisc>Some sort description here. blah, blah, blah.ah, blah.</CardSubheaderDisc>
          
        </CardInfoDisc>
        {/* <CardLink to='#'>Read More</CardLink> */}
        {/* </div> */}
      </CardsDisc>
    </>
  );
}
