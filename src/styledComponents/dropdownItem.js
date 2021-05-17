import styled from 'styled-components';

export const DropdownItem = styled.nav`
  ${'' /* display: flex; */}
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  background: #FFF;
  text-align: center;
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  width: relative;
  transition: transform 0.3s ease-in-out;
  display: ${props => (!props.drop ? 'none' : 'flex')};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.hover}
  }
  @media (max-width: ${props => props.theme.mobile}) {
    width: 90%;
  }

  a {
    font-size: 0.5rem;
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
  width: 200px;



  li {
    list-style-type: none;
    font-size: 1em;
    transition: color 0.3s linear;
    width: 100%;

     

    &:hover {
      color: ${props => props.theme.hover};
    }
    
    &:first-of-type {
        > button {
          border-top: 1px solid ${props => props.theme.white};
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
      }

      &:last-of-type > button {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
  
  
  button {
        flex: 1 0;
        background-color: white;
        font-size: 1em;
        padding: 15px 20px 15px 20px;
        border: 0;
        border-bottom: 1px solid ${props => props.theme.white};
       
        width: 100%;
        text-align: left;
        border-left: 1px solid ${props => props.theme.white};
        border-right: 1px solid ${props => props.theme.white};

        &:hover, &:focus {
          cursor: pointer;
          font-weight: bold;
          background-color: ${props => props.theme.white};
        }


        p {
          margin: 0;
          padding: 0;
          overflow-wrap: break-word;
        }
      }
    }
`;

