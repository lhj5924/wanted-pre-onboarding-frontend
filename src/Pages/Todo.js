import { styled } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { TodoEach } from '../Components/Todo/TodoEach';
import { PageContainer, Redirect } from '../Components/Common';
import { getTodo, postTodo } from '../API/api';

export function Todo() {
  Redirect();
  const [todoList, setTodoList] = useState([]);
  const [newTodoList, setNewTodoList] = useState(todoList);
  const [newTodo, setNewTodo] = useState('');
  const inputRef = useRef(null);

  // 할일 목록 가져오기
  useEffect(() => {
    getTodo('/todos')
      .then((res) => {
        console.log(res.data);
        setTodoList(res.data);
      })
      .catch((err) => console.log(err));
  }, [newTodoList]);

  // 할일 입력하기
  const handleChangeNewTodo = (event) => {
    event.preventDefault();
    setNewTodo(event.target.value);
  };
  // 할일 추가하기
  const handleButtonClick = (event) => {
    event.preventDefault(event);
    setNewTodoList([...todoList, newTodo]);
    postTodo({ todo: newTodo }, '/todos')
      .then((res) => console.log(`todo 추가 완료: ${res.data.todo}`))
      .catch((err) => console.log(err));
    setNewTodo('');
    // 추가 버튼 클릭 후 입력 칸에 오토포커싱
    inputRef.current.focus();
  };

  return (
    <>
      <PageContainer>
        <InputForm>
          <input
            data-testid="new-todo-input"
            type="text"
            placeholder="여기에 할일을 입력하세요"
            autofocus="true"
            ref={inputRef}
            onChange={handleChangeNewTodo}
            value={newTodo}
          />
          <button data-testid="new-todo-add-button" onClick={handleButtonClick}>
            추가
          </button>
        </InputForm>
        <TodoListBox className="TodoListBox">
          <TodoEach
            todoList={todoList}
            handleChangeNewTodo={handleChangeNewTodo}
            handleButtonClick={handleButtonClick}
          />
        </TodoListBox>
      </PageContainer>
    </>
  );
}

const InputForm = styled.form`
  width: 360px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;
  & input {
    width: 75%;
    height: calc(2rem - 4px);
    margin-right: 1rem;
  }
  & button {
    width: 25%;
  }
`;
const TodoListBox = styled.div`
  min-height: 70vh;
  max-height: 80dvh;
  width: 360px;
  overflow-x: hidden;
`;
