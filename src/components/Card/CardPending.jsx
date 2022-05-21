import styled from "styled-components";
import { Link } from "react-router-dom";
import React from 'react';
import Button from "../Button/Button";

const Cards4 = styled.div`
  // width: 22rem;
  // min-height: 25rem;
  // max-height: 25rem;
  width: 12rem;
  // height: fit-content;
  // height: 12rem;
  min-height: 15rem;
  max-height: 15rem;
  background: white;
  border: 1px solid black;
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const CardImage = styled.div`
  height: 4rem;
  min-width: 4rem;
  max-width: 4rem;
  // margin-bottom:  1rem ;
  border-radius: 50%;
  background: black;
  // margin: 1rem;
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-start;
`;

const CardInfo4 = styled.div`
  // border: 1px solid red;
  // margin: 1rem 0 0;
  // height: 45%;
  // height: fit-content;
  width: 90%;
  // background: red;
 
  margin-top: .25rem;

  
`;

const CardHeader4 = styled.h4`
  // font-size: 1.5rem;
  // margin: 1rem 0;
  // margin: 0.25rem 0;
  // margin: 0;
`;


const CardSubheader4 = styled.h6`
  // font-size: 1rem;
  // margin: 1rem 0;
  // margin: .25rem;
  // overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // word-wrap: break-word;
  // margin: .5rem 0;
  // margin: 0;
//   display: -webkit-box;
// -webkit-line-clamp: 2;
// -webkit-box-orient: vertical;
// overflow: hidden;
// text-overflow: ellipsis;
line-height: 1.5rem;


`;

const CardText4 = styled.p`
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
flex-direction: row;
justify-content: flex-end;
`;

const ApproveBar = styled.div`
width: 100%;
// border: 1px solid red;
padding: .5rem;
display: flex;
justify-content: flex-end;

`;

export default function CardScheduled() {
  return (
    <>
      <Cards4>
        {/* <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid red', marginBottom: '1rem'}}>
        <CardType>Funding</CardType>
        <CardType>6hrs ago</CardType>
        <CardType>Environment</CardType>
        </div>
        <CardInfo4>
          <CardHeader4>Event Title</CardHeader4>
          <CardSubheader4>Some sort description here. blah, blah, blah. sdSome sort description here. blah, blah, blah. sdSome sort description here. blah, blah, blah. sdajvnsjvosiuvnsdivnsidfuvnsidfunsiudn</CardSubheader4>
          
        <CardLink to='#'>Read More</CardLink>
        </CardInfo4>
        <ApproveBar>23 agreed out of 45</ApproveBar>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: '1rem'}}>
        <Button>Deny</Button>
        <Button>Approve</Button>
        </div> */}
      </Cards4>
    </>
  );
}
