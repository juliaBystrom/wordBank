import styled from "styled-components";

export const BoardTitle = styled.h2`
    font-size: 1.2em;
    color: ${props => props.theme.darkText};
    text-align: center;
`;


export const BoardNameInput = styled.input`
    border: none;
    background-color: transparent;
    font-size: 1em;
    color: ${props => props.theme.darkText};
    text-align: center;
    font-style: italic;
    width: 100%;

    ::placeholder {
       /*  font-size: 1.2em;
        text-align: center; */
        border: none;
    }

    :focus{
      border: none;
      outline: none;
    }
`;

export const RoundButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: transparent;
    // box-shadow: 0 2px 6px ;
    transition: box-shadow .2s;
    overflow: hidden;
    font-size: 4em;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.darkText};

  :hover{
    box-shadow: 0 2px 8px;
    // Fun thing transform: rotate(45deg);
    // background:  ${props => props.theme.hover};
  }
   
  :focus{
    outline-style: none; 
  }

  :active {
    background-color:  ${props => props.theme.link};
    box-shadow: 0 5px #666;
    transform: translateY(1px);
}
`;
