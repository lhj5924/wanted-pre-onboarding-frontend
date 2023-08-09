import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { BiPen } from 'react-icons/bi';
import PageContainer from '../Components/Common/PageContainer';
import { postTodo } from '../API/api';

const todoList = [
  {
    id: 0,
    content: `고영 이뻐하기`,
    createdAt: `Wed Feb 01 2023 22:51:17 GMT+0900`,
    checked: false,
  },
  {
    id: 1,
    content: `고영 밥주기`,
    createdAt: `Wed Feb 01 2023 22:51:17 GMT+0900`,
    checked: false,
  },
  {
    id: 2,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 3,
    content: `고영 츄르 주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 4,
    content: `고영 놀아주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 5,
    content: `고영 발톱깎기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 6,
    content: `고영 빗겨주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 8,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 9,
    content: `고영 분명히 아까 밥먹었는데도 불쌍하게 울면서 밥그릇을 떨구며 밥 달라고 시위하는 것 무시하고 제시간에 정량만 밥 주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 10,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 11,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 12,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 13,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 14,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 15,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 16,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 17,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 18,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 19,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 20,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 12,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
  {
    id: 21,
    content: `고영 궁디팡팡 해주기`,
    createdAt: `Wed Feb 01 2023 22:53:57 GMT+0900`,
    checked: false,
  },
];

export function Todo() {
  let [newTodo, setNewTodo] = useState('');
  let [newTodoList, setNewTodoList] = useState(todoList);

  // 페이지가 렌더링되면 기존 로컬스토리지의 투두리스트를 읽어와서 newTodoList로 세팅해주기
  useEffect(() => {
    let getTodo = JSON.parse(localStorage.getItem('Todolist'));
    setNewTodoList(getTodo);
  }, []);
  // newTodoList 가 업데이트 되면 로컬 스토리지에 저장하기
  useEffect(() => {
    localStorage.setItem('Todolist', JSON.stringify(newTodoList));
  }, [newTodoList]);

  // 할일 추가하기
  const handleButtonClick = (event) => {
    event.preventDefault(event);
    const todo = { todo: newTodo };
    setNewTodoList([...newTodoList, todo]);
    postTodo({ todo }, '/todos');
    setNewTodo('');
  };

  // 할일 추가하기
  const handleChangeNewTodo = (event) => {
    event.preventDefault();
    setNewTodo(event.target.value);
    console.log(`${newTodo}`);
  };

  // DeleteBtn - 삭제 버튼 클릭 시 삭제 기능
  const onRemove = (id) => {
    console.log(`delete todo id ${id}`);
    setNewTodoList(newTodoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <PageContainer>
        <form>
          <div>
            <input
              type="text"
              placeholder="여기에 할일을 입력하세요"
              className="newTodoBox__input--newTodo"
              onChange={handleChangeNewTodo}
              value={newTodo}
            ></input>

            <button
              className="newTodoBox__submitButton"
              onClick={handleButtonClick}
            >
              <BiPen icon="fa-solid fa-circle-plus" />
            </button>
          </div>
          <ul className="todos">
            {newTodoList.map((todo) => (
              <>
                <li key={todo.id}>
                  {/* <TodoElement todo={todo} onRemove={onRemove} /> */}
                  <p todo={todo} onRemove={onRemove} />
                </li>
              </>
            ))}
          </ul>
        </form>
      </PageContainer>
    </>
  );
}
