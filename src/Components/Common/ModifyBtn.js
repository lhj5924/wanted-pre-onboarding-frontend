import { styled } from 'styled-components';
// Assignment 10
// 투두 리스트의 수정 기능을 구현해주세요

// TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 되도록 해주세요

// 수정모드에서는 TODO의 내용을 변경할 수 있어야 합니다.

// 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경해주세요

// 수정 input창에는 data-testid="modify-input" 속성을 부여해주세요
// 수정모드에서는 TODO의 우측에 제출버튼과 취소버튼이 표시되게 해주세요

// 제출버튼에는 data-testid="submit-button" 속성을 부여해주세요
// 취소버튼에는 data-testid="cancel-button" 속성을 부여해주세요
// 제출버튼을 누르면 수정한 내용을 제출해서 내용이 업데이트 될 수 있도록 해주세요

// 취소버튼을 누르면 수정한 내용을 초기화 하고, 수정모드를 비활성화 해주세요
function ModifyBtn({ editClickHandler }) {
  return (
    <>
      <StyledModifyBtn onClick={editClickHandler}>수정</StyledModifyBtn>
    </>
  );
}

const StyledModifyBtn = styled.button`
  /* width: 1fr; */
`;
export { ModifyBtn };
