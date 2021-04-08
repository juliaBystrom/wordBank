import styled from 'styled-components';

const Dropdown = styled.nav`
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

export default Dropdown