import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import { ButtonYlw } from "../Buttons/Buttons";

const Cards4 = styled.div`
  width: 13rem;
  min-height: 14rem;
  max-height: 14rem;
  background: white;
  border: 1px solid black;
  border-radius: 0.75rem;
  padding: 1rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // margin-bottom: 3rem;
  background: #98dddf;
  box-shadow: 4px 4px rgba(0, 0, 0, 1);
`;

const CardInfo4 = styled.div`
  width: 95%;
  margin-top: 0.25rem;
`;

const CardHeader4 = styled.h4`
  font-size: 1.1rem;

`;

const CardPendingCopy = styled.p`
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  // line-height: 1.5rem;
`;

const CardSubheader5 = styled.h6`
  font-size: 0.75rem;
  margin: 0;
  font-weight: 600;

  &:hover {
    color: white;
  }
`;

const CardType = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-end;
  font-size: 0.65rem;
  font-weight: 600;
`;

const ApproveBar = styled.div`
  width: 100%;
  height: 0.5rem;
  // background: white;
  border-radius: 6rem;
  border: 1px solid black;
  // padding: .5rem;
  display: flex;
  justify-content: center;
  margin: 0.5rem 0 0 0;
  background: linear-gradient(
    to right,
    #e198ad 0%,
    #e198ad 50%,
    white 50%,
    white 100%
  );
`;

export default function CardScheduled() {
  return (
    <>
      <Cards4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardType id='supertext'>Assembly</CardType>
          <CardType id='supertext'>20 May, 2020</CardType>
        </div>
        <CardInfo4>
          <CardHeader4 id='cardheader'>Assembly Title</CardHeader4>
          <CardPendingCopy id='cardcopy'>
            Apollonius of Perga sed quia non numquam eius modi tempora incidunt
            ut labore et dolore
          </CardPendingCopy>
        </CardInfo4>
        <ApproveBar></ApproveBar>
        <CardType id='voting'>25 agreed out of 50</CardType>
        <div
          style={{
            marginTop: ".5rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ButtonYlw>Approve</ButtonYlw>
          <ButtonYlw>Deny</ButtonYlw>
        </div>
      </Cards4>
    </>
  );
}
