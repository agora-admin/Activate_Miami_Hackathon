import styled from 'styled-components';
import Card3 from '../Card/CardLeft';
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";


// const Nav = styled.nav`
// height: 100%;
// width: 5rem;
// background-color: red;
// display: flex;
// // flex-direction: column;
// justify-content: center;
// align-items: center;
// // margin-right: 5rem;
// border-right: 2px solid black;
// // margin: 3rem 0;
// `;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: center;
  width: 11rem;
  height: 17rem;
  border: 1px solid black;
  border-radius: 0.75rem;
  padding: 2rem 1.5rem;
  background: #98dddf;
  box-shadow: 4px 4px rgba(0, 0, 0, 1);
`;



const MenuItems = styled(Link)`
display: flex;
flex-direction: column;
font-size: .75rem
`;

export default function NavBar(){
  return(
    <>
    <Nav>
      <MenuItems to='/discovery'>
        Discovery
      </MenuItems>
      <MenuItems to='/dashboard'>
        Dashboard
      </MenuItems>
      <MenuItems to='/proposal'>
        Proposal
      </MenuItems>
      <MenuItems to='#'>
        Announcements
      </MenuItems>
      <MenuItems to='#'>
        About
      </MenuItems>
      <MenuItems to='#'>
        Profile
      </MenuItems>
    </Nav>
    </>
  )
}