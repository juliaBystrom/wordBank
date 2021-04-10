import styled from 'styled-components';

export const Dropdown = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${props => props.theme.dark};
  text-align: left;
  padding: 1rem;
  width: 150px;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;
  ${'' /* transform: ${props => (!props.drop ?  'translateY(-100%)' : 'translateY(0%)')}; */}
  z-index: 10;
  font-size: 1rem;
  font-weight: regular;
  color: ${props => props.theme.darkText};
  text-decoration: none;
  transition: color 0.3s linear;
  

  @media (max-width: ${props => props.theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    font-weight: regular;
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

export const DropdownComponentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  

`;


export const DropdownButton = styled.div`
  display: flex;
  cursor: pointer;
  padding-right: 20px;
  padding-left: 20px;

  // Create more rounded corners
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;


  flex-direction: row;
  // When :onHover changes background it will be wioth a transition
  background: ${props => props.theme.dark};
  transition: background 0.3s linear;
  text-align: left;

  z-index: 10;
  font-size: 1rem;
  font-weight: bold;


  


  @media (max-width: ${props => props.theme.mobile}) {
    width: 100%;
  }

  :hover {
    background: ${props => props.theme.medium};
  }


  // This will create a one-line border between the first and second div
  div {
    &:first-child {
    border-right: 1px solid ${props => props.theme.light};
  }
  }
   

  p {
    font-size: 1em;
    color: ${props => props.theme.lightText};
    padding: 1em;

    
    @media (max-width: ${props => props.theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }




    // When the p is hovered
    &:hover {
      // color: ${props => props.theme.hover};
    }
  }
`;

