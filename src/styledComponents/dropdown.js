import styled from 'styled-components';

export const Dropdown = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${props => props.theme.queenblue};
  text-align: left;
  padding: 1rem 1.5rem 1rem 1.5rem;
  box-shadow: 0.5px 0.5px 15px #c4c2c2;
  width: 170px;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;
  ${'' /* transform: ${props => (!props.drop ?  'translateY(-100%)' : 'translateY(0%)')}; */}
  z-index: 10;
  font-size: 1rem;
  font-weight: regular;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  margin: 10px 0 10px 0;
  

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
  padding: 1px 20px 1px 20px;
  justify-content: center;
  text-align: center;
  ${'' /* // Create more rounded corners */}
  border-radius: 4px;
  flex-direction: row;
  ${'' /* // When :onHover changes background it will be wioth a transition */}
  background-color: ${props => props.theme.midnightgreen};
  transition: background 0.3s linear;
  text-align: left;
  z-index: 1;
  font-size: 15px;
  font-weight: bold;


  @media (max-width: ${props => props.theme.mobile}) {
    width: 100%;
  }

  :hover {
    background: ${props => props.theme.medium};
  }


  ${'' /* // This will create a one-line border between the first and second div */}
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

