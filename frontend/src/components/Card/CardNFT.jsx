import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import Button from "../Buttons/Buttons";
import { FaEthereum } from "react-icons/fa";
import Scheduled from "../Scheduled/Scheduled";

const Cards4 = styled.div`
  width: 13rem;
  min-height: 13rem;
  max-height: 13rem;
  border: 1px solid black;
  border-radius: 0.75rem;
  margin-top: 1rem;
  box-shadow: 10px 10px 5px rgba(19, 24, 44, 0.4);
  background: linear-gradient(white 0%, white 65%, #98dddf 50%, #98dddf 100%);
`;

const CardAvatar = styled.div`
  height: 1.7rem;
  min-width: 1.7rem;
  max-width: 1.7rem;
  margin-right: 0.3rem;
  border-radius: 50%;
  background: white;
  border: 1.5px solid black;
`;

const CardImage = styled.div`
  height: 8.2rem;
  min-width: 10rem;
  max-width: 10rem;
  margin-right: 0.5rem;
`;

const CardInfo4 = styled.div`
  // border: 1px solid red;
  // margin: 1rem 0 0;
  // height: 25%;
  // height: fit-content;
  // width: 95%;
  // background: red;

  // margin-top: 0.25rem;
  display: "flex";
  flex-direction: "column";
  // justify-content: "bottom";
  align-items: "end";
`;

const CardHeader4 = styled.h4`
  font-size: 1rem;
  margin: 0;
`;



const CardSubheader5 = styled.h6`
  font-size: 1rem;
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
  margin: 0;
`;

export default function CardNFT() {
  return (
    <>
      <Cards4>
        <CardInfo4>
          <CardImage></CardImage>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "4.5rem",
              padding: " 0 .7rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  margin: ".15rem 0",
                  padding: ".1rem 0 0 0",
                }}
              >
                <CardAvatar></CardAvatar>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardType>username</CardType>
                  <CardHeader4>nft name</CardHeader4>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardType>Auction Time</CardType>
                <CardType>05:40:03</CardType>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Scheduled/>
              {/* <CardSubheader5> */}
                {/* <FaEthereum style={{ color: "blue" }} /> 1.37
              </CardSubheader5>
              <CardType>
                Last <FaEthereum style={{ color: "blue" }} /> 0.4
              </CardType>
              <CardType>
                Reserve <FaEthereum style={{ color: "blue" }} /> 3.4
              </CardType> */}
            </div>
          </div>
        </CardInfo4>
      </Cards4>
    </>
  );
}
