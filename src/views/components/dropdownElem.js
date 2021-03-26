import React from 'react';
import styled from 'styled-components';

const DropdownElem = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${props => props.theme.secondary};
  text-align: left;
  padding: 1rem;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;
  transform: ${props => !props.drop ?  'translateY(0)' : 'translateY(-100%)'};
  opacity: ${props => (!props.drop ? '0' : '1')};

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

export default DropdownElem