import { React } from 'react';
import { deleteTodo } from '../../API/api';
import styled from 'styled-components';

function DeleteBtn({ todo }) {
  function handleOnClick() {
    console.log(`DeleteBtn - ${todo.id}`);
    let URL = `/todos/${todo.id}`;
    deleteTodo(URL)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <StyledDeleteBtn onClick={handleOnClick}>삭제</StyledDeleteBtn>
    </>
  );
}

const StyledDeleteBtn = styled.button`
  /* width: 1fr; */
`;

export { DeleteBtn };
