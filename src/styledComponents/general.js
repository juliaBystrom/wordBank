import styled from "styled-components";

export const BoardTitle = styled.h2`
  font-size: 1.2em;
  color: ${(props) => props.theme.darkText};
  text-align: center;
`;

export const EditableBoardTitle = styled.input`
  display: block;
  margin-top: 0.7rem;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 5px;
  width: 80%;
  outline: none;
  resize: none;
  overflow: hidden;
  border: none;
  border: 1px solid transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1.2em;
  color: ${(props) => props.theme.darkText};
  text-align: center;
  background-color: ${(props) => props.theme.darkAlabaster};
  font-weight: bold;

  :hover {
    border: 1px solid ${(props) => props.theme.darkestAlabaster};
  }
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
  padding: 1.8em;
`;

export const TopContainer = styled.div`
  // width: 100%;
`;

export const BottomContainer = styled.div`
  // width: 100%;
`;

export const DeleteButton = styled.button`
  //background-color: ${(props) => props.theme.fieryrose};
  // background-color: rgb(244, 91, 105, 0.1);
  background-color: ${(props) => props.theme.darkAlabaster};
  // display: block;
  // box-sizing: border-box;
  margin-top: 0.7rem;
  margin-left: 12px;
  margin-right: 12px;
  padding: 3px;
  // box-sizing: border-box;
  border: 1px solid rgb(244, 91, 105, 0.2);
  border-radius: 5px;
  width: 87%;
  align-self: center;
  outline: none;
  resize: none;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 0.8em;
  color: ${(props) => props.theme.darkText};
  text-align: center;

  :hover, :focus {
    background-color: rgb(244, 91, 105, 0.5);
  }
`;
