import styled from "styled-components";

export const CardHeader2 = styled.h4`
  // font-size: 1.5rem;
  // margin: 1rem 0;
  margin: 0.25rem 0;
  // margin: 0;
`;

const CardSubheader2 = styled.h6`
  // font-size: 1rem;
  // margin: 1rem 0;
  // margin: .25rem;
  margin: 0;
`;

export default function Text(props) {
  return (
    <>
      <CardHeader2>HEY</CardHeader2>
      <CardSubheader2>YO</CardSubheader2>
    </>
  );
}
