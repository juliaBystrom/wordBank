import styled from "styled-components";

/*

Styled closed buttons

OBS will aply style to children which need to be the following:

<div>
    <div />
    <div />
</div>


*/

export const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;

  div {
    position: relative;
    margin: auto;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.2);

      div {
        background-color: ${(props) => props.theme.wine};
      }
    }

    div {
      height: 4px;
      width: 40px;
      position: absolute;
      margin-top: 18px;
      background-color: ${(props) => props.theme.queenblue};
      border-radius: 2px;

      :first-child {
        transform: rotate(45deg);
        transition: all 0.3s ease-in;
      }

      :nth-child(2) {
        transform: rotate(-45deg);
        transition: all 0.3s ease-in;
      }
    }
  }
`;

export const StyledEditButton = styled.button`
  background-color: transparent;
  border: none;

  div {
    position: relative;
    margin: auto;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.2);

      div {
        background-color: ${(props) => props.theme.wine};
      }
    }

    div {
      height: 4px;
      width: 40px;
      position: absolute;
      margin-top: 18px;
      background-color: ${(props) => props.theme.queenblue};
      border-radius: 2px;

      :first-child {
        transform: rotate(45deg);
        transition: all 0.3s ease-in;
      }

      :nth-child(2) {
        transform: rotate(-45deg);
        transition: all 0.3s ease-in;
      }
    }
  }
`;

export const EditButton = styled.button`
  width: 60px;
  height: 60px;

  // box-shadow: 0 2px 6px ;
  transition: box-shadow 0.2s;
  // overflow: hidden;
  text-align: start;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.darkText};
  background-color: rgba(54, 51, 59, 0.05);
  align-items: center;
  justify-content: center;

  border: none;
  font-weight: bold;

  :hover {
    transform: translateY(2px);
    -webkit-box-shadow: 2px 2px 2px 2px ${(props) => props.theme.darkText} inner;
    box-shadow: 2px 2px 5px 5px ${(props) => props.theme.darkText} inner;
    // Fun thing transform: rotate(45deg);
    // background:  ${(props) => props.theme.hover};
  }

  :focus {
    outline-style: none;
  }

  :active {
    transform: translateY(4px);
  }
`;

export const ModelHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  // background-color: ${(props) => props.theme.blanchedalmond};
  border-radius: 10px;
  padding: 5px;
`;

export const CardBarWrapper = styled.div`
  flex: 1 1;
  padding: 2px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  button {
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;

    div {
      margin: 0;
      padding: 5px;
      border-radius: 0;
      flex-direction: column;
      min-width: 150px;
      align-items: center;
    }


  }
`;

export const InputTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 260px;
  border-radius: 5px 5px 0px 0px;
  // height: 1em;
  text-align: center;
  background-color: ${(props) => props.theme.queenblue};
  font-family: serif, Times;
  font-size: 1em;
  padding: 5px;
  margin-top: 5px;
  // margin: 5px 0px;
`;
