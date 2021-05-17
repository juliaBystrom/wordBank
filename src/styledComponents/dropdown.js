import styled from "styled-components";

export const Dropdown = styled.nav`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.button};
  text-align: center;
  padding: 1rem 1.5rem 1rem 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  width: 250px;
  flex: 0 0;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;

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
  border-radius: 5px;
  flex-direction: row;
  ${"" /* // When :onHover changes background it will be wioth a transition */}
  background-color: ${(props) => props.theme.button};
  transition: background 0.3s linear;
  text-align: left;
  z-index: 0;
  font-size: 15px;
  font-weight: bold;

  :hover {
    background: ${(props) => props.theme.hover};
  }

  div {
    &:first-child {
     
    }
  }

  p {
    font-size: 1em;
    color: ${(props) => props.theme.white};
    padding: 0em 1em;

    @media (max-width: ${(props) => props.theme.mobile}) {
      text-align: center;
    }

    &:hover {
    }
  }
`;
