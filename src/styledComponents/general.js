import styled from "styled-components";

export const BoardTitle = styled.h2`
  font-size: 1.2em;
  color: ${(props) => props.theme.darkText};
  text-align: center;
`;

export const EditableBoardTitle = styled.input`
  background: ${(props) => props.theme.white};
  display: block;
  margin-top: 0.7rem;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 2.5px 0px, rgba(255, 255, 255, 0.25) 0px 2.5px 0px inset;
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
  }

  :focus {
    outline-style: none;
  }

  :active {
    background-color: ${(props) => props.theme.link};
    box-shadow: 0 5px #665;
    transform: translateY(1px);
  }
`;

export const AppWrapper = styled.div`
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
`;

export const BottomContainer = styled.div`
`;

export const DeleteButton = styled.button`

  background: ${(props) => props.theme.delete};
  display: block;
  margin-top: 0.7rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2px;
  border: 0px solid transparent;
  border-radius: 30px;
  width: 80%;
  outline: none;
  resize: none;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 0.8em;
  color: ${(props) => props.theme.white};
  text-align: center;

  :hover, :focus {
    background-color: ${(props) => props.theme.deleteFocus};
  }
`;
