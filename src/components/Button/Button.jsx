import styled from "styled-components";

const Buttons = styled.button`
max-width: max-content;
min-width: 10rem;
height: 3rem;
padding: .75rem;
border-radius: 1.2rem;
background: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
`;

export default function Button(props) {
  return <Buttons>{props.children}</Buttons>;
};

