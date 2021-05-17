import styled from "styled-components";

// Styling/animation of menu principally taken from
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.white};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;

  transition: transform 0.2s ease-in-out;
  transform: ${(props) =>
    !props.open ? "translateX(-100%)" : "translateX(0)"};

  @media (max-width: ${(props) => props.theme.mobile}) {
    width: 100%;
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

export default Menu;
