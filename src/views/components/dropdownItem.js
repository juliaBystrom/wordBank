import React from 'react';
import styled from 'styled-components';

const DropdownItem = styled.nav`
  ${'' /* display: flex; */}
  flex-direction: row;
  justify-content: center;
  background: #FFF;
  text-align: left;
  padding: 1rem;
  width: 150px;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  ${'' /* transform: ${props => (!props.drop ?  'translateY(-100%)' : 'translateY(0%)')}; */}
  ${'' /* opacity: ${props => (!props.drop ? '0' : '1')}; */}
  display: ${props => (!props.drop ? 'none' : 'flex')};

  @media (max-width: ${props => props.theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    font-weight: regular;
    color: #000;
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

export default DropdownItem