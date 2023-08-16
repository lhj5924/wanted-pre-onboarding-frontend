import React, { useState } from 'react';
import { updateTodo } from '../../API/api';
import styled from 'styled-components';

function CheckBox({ todo }) {
  // 체크 버튼
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  // todo.id 의 isCompleted 상태를 변경하기
  function handleChange(e) {
    setIsChecked(!isChecked);
    let URL = `/todos/${todo.id}`;
    let payload = { todo: todo.todo, isCompleted: !isChecked };
    updateTodo(payload, URL)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <CheckInput
        type="checkbox"
        onChange={handleChange}
        id={todo.id}
        checked={isChecked}
      ></CheckInput>
    </>
  );
}

const CheckInput = styled.input`
  /* width: 1fr; */
`;

export { CheckBox };
