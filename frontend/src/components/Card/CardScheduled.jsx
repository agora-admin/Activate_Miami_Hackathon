import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import Button, { ButtonYlw } from "../Buttons/Buttons";
import { MdPlayArrow, MdOutlineCallMade } from "react-icons/md";
const Cards2 = styled.div`
  width: 13rem;
  min-height: 9.5rem;
  max-height: 9.5rem;
  background: white;
  border: 1px solid black;
  border-radius: 0.75rem;
  padding: 1rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  background: #98dddf;
  box-shadow: 4px 4px rgba(0, 0, 0, 1);
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
  // width: 90%;
  // border: 1px solid red;
  margin: 0 0 .5rem 0;
`;

const CardHeader = styled.h4`
  // font-size: 1.1rem;
  margin: .25rem 0;
`;

const CardScheduledCopy = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardText2 = styled.p`
  margin: 0;
`;

const CardLink = styled(Link)`
  color: blue;
  margin: 0;
`;

const CardSuperText = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: top;
  // // font-size: 0.65rem;
  // // font-weight: 600;
`;

export default function CardScheduled() {
  return (
    <>
      <Cards2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CardSuperText id='supertext'>Assembly</CardSuperText>
          <CardSuperText id='supertext'>20 May, 2020</CardSuperText>
        </div>
        <CardInfo2>
          <CardHeader id='cardheader'>Assembly Title</CardHeader>
          <CardScheduledCopy className='cardcopy'>
            Apollonius of Perga sed quia non numquam eius modi tempora incidunt
            ut labore et dolore
          </CardScheduledCopy>
        </CardInfo2>
          <ButtonYlw>
            <MdPlayArrow id='videoicon' />
            Video Link
            <MdOutlineCallMade id='arrowicon' />
          </ButtonYlw>
      </Cards2>
    </>
  );
}
