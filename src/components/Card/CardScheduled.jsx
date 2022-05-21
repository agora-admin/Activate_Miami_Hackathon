import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react';

const Cards2 = styled.div`
  width: 12rem;
  // height: fit-content;
  // height: 12rem;
  min-height: 6rem;
  max-height: 6rem;
  background: white;
  border: 1px solid black;
  border-radius: 0.75rem;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // margin-right: 1.5rem;
  margin-bottom: 3rem;
`;

const CardImage2 = styled.div`
  height: 3rem;
  min-width: 3rem;
  max-width: 3rem;
  // margin-bottom:  1rem ;
  border-radius: 20%;
  // background: black;
  margin-right: 1rem;
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-start;
`;

const CardInfo2 = styled.div`
  // border: 4px solid red;
  // margin: 1rem 0 0;
  // height: 45%;
  // height: fit-content;
  width: 90%;
  // background: red;
 
  // margin-top: .25rem;

  
`;

const CardHeader2 = styled.h4`
  // font-size: 1.5rem;
  // margin: 1rem 0;
  // margin: 0.25rem 0;
  // margin: 0;
  // border: 1px solid blue;
  // padding: .25rem 0 0 0;
`;


const CardSubheader2 = styled.h6`
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

const CardType = styled.div`
display: flex;
// flex-direction: row;
justify-content: flex-end;
margin-bottom: .25rem;
`;

export default function CardScheduled() {
  return (
    <>
      <Cards2>
      {/* <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid red', marginBottom: '1rem'}}> */}
     
        <div style={{display: 'flex', border:'1px solid purple'}}>
        <CardImage2></CardImage2>
        {/* <div style={{ width: '100%'}}>
        <CardType>Regional</CardType>
          <CardHeader2>Kendall DAO</CardHeader2>
        </div> */}
        </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <CardType>Discourse</CardType>
        </div>
        
        <CardInfo2>
          <CardHeader2>Event Title</CardHeader2>
          <CardSubheader2>Some sort description here. blah, blah, blah.ah, blah.</CardSubheader2>
          
        </CardInfo2>
        <CardLink to='#'>Read More</CardLink>
        {/* </div> */}
      </Cards2>
    </>
  );
}
