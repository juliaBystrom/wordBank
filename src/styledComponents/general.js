import styled from "styled-components";

export const BoardTitle = styled.h2`
  font-size: 1.2em;
  color: ${(props) => props.theme.darkText};
  text-align: center;
`;

export const EditableBoardTitle= styled.input`
  background: transparent;
  display: block;
  margin-top: 0.7rem;
  margin-left: auto;
  margin-right: auto;
  padding: 14px 0 0 0;
  outline: none;
  resize: none;
  overflow: hidden;
  border: 1px solid transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1.2em;
  color: ${(props) => props.theme.darkText};
  text-align: center;
`;

export const BoardNameInput = styled.input`
  border: none;
  background-color: transparent;
  margin-top: 0.7rem;
  font-size: 1em;
  color: ${(props) => props.theme.darkText};
  text-align: center;
  font-style: italic;
  width: 100%;

  ::placeholder {
    /*  font-size: 1.2em;
        text-align: center; */
    border: none;
  }

  :focus {
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
  transition: box-shadow 0.2s;
  overflow: hidden;
  font-size: 4em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.darkText};

  :hover {
    box-shadow: 0 2px 8px;
    // Fun thing transform: rotate(45deg);
    // background:  ${(props) => props.theme.hover};
  }

  :focus {
    outline-style: none;
  }

  :active {
    background-color: ${(props) => props.theme.link};
    box-shadow: 0 5px #666;
    transform: translateY(1px);
  }
`;

export const AppWrapper = styled.div`
  // min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 1400px;
  padding: 0 auto;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  background-color: transparent;
  padding: 1.8em 0em;
 
`;

export const TopContainer = styled.div`
  // width: 100%;
`;

export const BottomContainer = styled.div`
  // width: 100%;
`;
