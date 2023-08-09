import { useState } from 'react';
import { getTodo } from '../../API/api';
import { styled } from 'styled-components';

export function TodoEach() {
  const [todoList, setTodoList] = useState([]);

  // 할일 목록 가져오기
  getTodo('/todos')
    .then((res) => {
      setTodoList(res.data);
    })
    .catch((err) => console.log(err));

  return (
    <>
      <StyledUL className="StyledUL">
        {todoList &&
          todoList.map((todo) => (
            <StyledLI key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.isCompleted} />
                <Todo>{todo.todo}</Todo>
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
const Todo = styled.div`
  width: auto;
  height: 30px;
  background-color: lightblue;
  margin: 2px;
`;
