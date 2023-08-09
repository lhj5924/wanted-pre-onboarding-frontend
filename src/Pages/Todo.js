import { styled } from 'styled-components';
import { useState } from 'react';
import PageContainer from '../Components/Common/PageContainer';
import { TodoEach } from '../Components/Todo/TodoEach';
import Redirect from '../Components/Common/Redirect';
import { postTodo } from '../API/api';

export function Todo() {
  Redirect();

  let [newTodo, setNewTodo] = useState('');
  let [newTodoList, setNewTodoList] = useState(['todo']);

  // 할일 입력하기
  const handleChangeNewTodo = (event) => {
    event.preventDefault();
    setNewTodo(event.target.value);
  };
  // 할일 추가하기
  const handleButtonClick = (event) => {
    event.preventDefault(event);
    setNewTodoList([...newTodoList, newTodo]);
    postTodo({ todo: newTodo }, '/todos')
      .then((res) => console.log(`todo 추가 완료: ${res.data.todo}`))
      .catch((err) => console.log(err));
    setNewTodo('');
  };

  return (
    <>
      <PageContainer>
        <TodoListBox className="TodoListBox">
          <TodoEach />
        </TodoListBox>
        <form>
          <input
            data-testid="new-todo-input"
            type="text"
            placeholder="여기에 할일을 입력하세요"
            onChange={handleChangeNewTodo}
            value={newTodo}
          />
          <button data-testid="new-todo-add-button" onClick={handleButtonClick}>
            추가
          </button>
        </form>
      </PageContainer>
    </>
  );
}

const TodoListBox = styled.div`
  height: 200px;
  width: 200px;
`;
