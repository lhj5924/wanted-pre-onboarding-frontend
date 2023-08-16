import { useEffect, useState } from 'react';
import { getTodo } from '../../API/api';
import { styled } from 'styled-components';
import { CheckBox, DeleteBtn, ModifyBtn } from '../Common';

export function TodoEach({ todoList, handleChangeNewTodo, handleButtonClick }) {
  // Assignment 10
  // 투두 리스트의 수정 기능을 구현해주세요
  //   수정 버튼을 누르면 todo 내용 대신 수정 모드(input 창, 제출 버튼, 취소버튼)가 뜸

  // input 창 : todo의 내용이 입력되어 있음
  // 제출버튼 : todo 업데이트
  // 취소 버튼 : todo 내용으로 돌아가기, 수정 모드 비활성화

  // 상태로 관리할 것 : todoList, 로그인 여부

  const [editMode, setEditMode] = useState(false);

  const editClickHandler = () => {
    setEditMode(!editMode);
  };
  console.log(todoList);
  return (
    <>
      <StyledUL className="StyledUL">
        {todoList &&
          todoList.map((todo) => (
            <StyledLI key={todo.id}>
              <CheckBox todo={todo} />
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={todo.todo}
                    onChange={handleChangeNewTodo}
                  ></input>
                  <button onClick={handleButtonClick}>제출</button>
                  <button onClick={editClickHandler}>취소</button>
                </>
              ) : (
                <>
                  <StyledTodo>{todo.todo}</StyledTodo>
                  <ModifyBtn editClickHandler={editClickHandler} />
                  <DeleteBtn todo={todo} />
                </>
              )}
            </StyledLI>
          ))}
      </StyledUL>
    </>
  );
}

const StyledUL = styled.ul`
  height: 100%;
  background-color: lightpink;
  display: flex;
  flex-direction: column;
`;
const StyledLI = styled.li`
  background-color: lavender;
  display: flex;

  & > * {
    margin: 0.2rem 0.5rem;
  }
`;
const StyledTodo = styled.p`
  min-width: 200px;
  height: 2rem;
  background-color: lightblue;
  text-align: left;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
