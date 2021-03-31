import React from 'react';
import styled from 'styled-components';

// Styling/animation of burger principally taken from
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/


const Burger = styled.button`
  position: absolute;
  top: 2%;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }


  div {
    width: 1.5rem;
    height: 0.2rem;
    background: ${props => props.theme.secondary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${props => (!props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${props => (!props.open ? '0' : '1')};
      transform: ${props => (!props.open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${props => (!props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default Burger