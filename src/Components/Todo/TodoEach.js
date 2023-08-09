import { useEffect, useState } from 'react';
import { getTodo, updateTodo } from '../../API/api';
import { styled } from 'styled-components';
import CheckBox from '../Common/CheckBox';
import DeleteBtn from '../Common/DeleteBtn';

export function TodoEach({ newTodoList }) {
  const [todoList, setTodoList] = useState(newTodoList);

  // 할일 목록 가져오기
  useEffect(() => {
    getTodo('/todos')
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => console.log(err));
  }, [todoList]);

  //     Assignment 7
  // TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.

  return (
    <>
      <StyledUL className="StyledUL">
        {todoList &&
          todoList.map((todo) => (
            <StyledLI key={todo.id}>
              <label>
                <CheckBox todo={todo} />
                <StyledTodo>{todo.todo}</StyledTodo>
                <DeleteBtn todo={todo} />
              </label>
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
  justify-content: space-evenly;
`;
const StyledLI = styled.li`
  background-color: lavender;
`;
const StyledTodo = styled.div`
  width: auto;
  height: 30px;
  background-color: lightblue;
  margin: 2px;
`;
