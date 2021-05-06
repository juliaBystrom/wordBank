import styled from "styled-components";

export const Dropdown = styled.nav`
  box-sizing: border-box;
/*   display: flex;
  flex-direction: row;
  justify-content: center; */
  background-color: ${(props) => props.theme.queenblue};
  text-align: center;
  padding: 1rem 1.5rem 1rem 1.5rem;
  box-shadow: 0.5px 0.5px 15px #c4c2c2;
  width: 250px;
  flex: 0 0;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;
  ${
    "" /* transform: ${props => (!props.drop ?  'translateY(-100%)' : 'translateY(0%)')}; */
  }
  z-index: 10;
  font-size: 1rem;
  font-weight: regular;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  margin: 10px 0 10px 0;

  @media (max-width: ${(props) => props.theme.mobile}) {
    width: 90%;
    
  }

  a {
    font-size: 1rem;
    font-weight: regular;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    ${
      "" /* border-radius: 16px;
    border: 2px solid #FFF;
    padding: 20px;
    margin: 5px; */
    }

    @media (max-width: ${(props) => props.theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${(props) => props.theme.hover};
    }
  }
`;

export const DropdownComponentWrapper = styled.div`
  box-sizing: border-box;

  flex: 0 0;
`;

export const DropdownButton = styled.div`
  display: flex;
  cursor: pointer;
  padding: 1px 10px 1px 10px;
  justify-content: center;
  text-align: center;
  ${"" /* // Create more rounded corners */}
  border-radius: 4px;
  flex-direction: row;
  ${"" /* // When :onHover changes background it will be wioth a transition */}
  background-color: ${(props) => props.theme.midnightgreen};
  transition: background 0.3s linear;
  text-align: left;
  z-index: 0;
  font-size: 15px;
  font-weight: bold;

  :hover {
    background: ${(props) => props.theme.medium};
  }

  ${
    "" /* // This will create a one-line border between the first and second div */
  }
  div {
    &:first-child {
      border-right: 1px solid ${(props) => props.theme.light};
    }
  }

  p {
    font-size: 1em;
    color: ${(props) => props.theme.lightText};
    padding: 0em 1em;

    @media (max-width: ${(props) => props.theme.mobile}) {
      // font-size: 1.5em;
      text-align: center;
    }

    // When the p is hovered
    &:hover {
      // color: ${(props) => props.theme.hover};
    }
  }
`;