import styled from 'styled-components';

export const DropdownItem = styled.nav`
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

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.hover}
  }
  @media (max-width: ${props => props.theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    font-weight: regular;
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${props => props.theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${props => props.theme.hover};
    }
  }
`;



export const DropdownComponentItem = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  
  // transition: transform 0.3s ease-in-out;
  ${'' /* transform: ${props => (!props.drop ?  'translateY(-100%)' : 'translateY(0%)')}; */}
  ${'' /* opacity: ${props => (!props.drop ? '0' : '1')}; */}

  @media (max-width: ${props => props.theme.mobile}) {
    width: 100%;
  }

  li {
    list-style-type: none;
    font-size: 1rem;
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
    
    &:first-of-type {
        > button {
          border-top: 1px solid ${props => props.theme.light};
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
      }

      &:last-of-type > button {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
  
  
  button {
        display: flex;
        justify-content: space-between;
        background-color: white;
        font-size: 1em;
        padding: 15px 20px 15px 20px;
        border: 0;
        border-bottom: 1px solid ${props => props.theme.light};
        width: 100%;
        text-align: left;
        border-left: 1px solid ${props => props.theme.light};
        border-right: 1px solid ${props => props.theme.light};

        &:hover, &:focus {
          cursor: pointer;
          font-weight: bold;
          background-color: ${props => props.theme.light};
        }
      }
    }
`;

