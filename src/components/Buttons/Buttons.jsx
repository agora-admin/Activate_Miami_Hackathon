import styled from "styled-components";
import './Buttons.scss';

const Button = styled.button`
  max-width: max-content;
  min-width: 7rem;
  background: #00979c;
  color: white;
  
`;

const BtnYlw = styled.button`
  max-width: max-content;
  min-width: auto;
  height: auto;
  background: #e1d198;
  
`;

export default function Buttons(props) {
  return <Button className='button'>{props.children}</Button>;
}

export const ButtonYlw = (props) => {
  return <BtnYlw className='button'>{props.children}</BtnYlw>;
};
