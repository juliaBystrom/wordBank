import {
  BoardWrapper,
  BoardTitleWrapper,
  BoardCardWrapper,
  BoardTitle,
  BoardNameInput,
  RoundButton,
  EditableBoardTitle,
} from "../styledComponents";

const ButtonWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px ${(props) => (props.theme.showTestBorders ? "solid" : "hidden")}
    ${(props) => props.theme.testBorder};
`;

export default function AddBoardView(props) {
  return (
    <BoardWrapper>
      <BoardTitleWrapper>
            <BoardTitleWrapper>
                <EditableBoardTitle value={props.value} placeholder="Enter board title" type="text" onChange={e => props.onBoardnameChange(e.target.value)}>
                </EditableBoardTitle>
            </BoardTitleWrapper>
      </BoardTitleWrapper>

      <BoardCardWrapper>
        <ButtonWrapper>
          <RoundButton onClick={() => props.addBoard()}>+</RoundButton>
        </ButtonWrapper>
      </BoardCardWrapper>
    </BoardWrapper>
  );

}
