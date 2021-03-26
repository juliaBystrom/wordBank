import React from 'react';
import styled from 'styled-components';


// Styling/animation of menu principally taken from
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.main};
  height: 100vh;
  text-align: left;
  padding: 2.5rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;
  transform: ${props => !props.open ?  'translateX(0)' : 'translateX(-100%)'};

  @media (max-width: ${props => props.theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    padding: 2rem;
    font-weight: regular;
    letter-spacing: 0.3rem;
    color: #FFF;
    text-decoration: none;
    transition: color 0.3s linear;
    ${'' /* border-radius: 16px;
    border: 2px solid #FFF;
    padding: 20px;
    margin: 5px; */}
    
    @media (max-width: ${props => props.theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${props => props.theme.hover};
    }
  }
`;

export default Menu
