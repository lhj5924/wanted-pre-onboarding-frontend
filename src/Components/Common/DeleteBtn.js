import { React } from 'react';
import { deleteTodo } from '../../API/api';
import styled from 'styled-components';
// 휴지통 아이콘 넣기

const StyledDeleteBtn = styled.button`
  width: 16px;
  height: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${(props) => (props.isMouseEnter ? 'red' : 'transparent')};
`;

function DeleteBtn({ todo }) {
  function handleOnClick() {
    console.log(`DeleteBtn - ${todo.id}`);
    let URL = `/todos/${todo.id}`;
    deleteTodo(URL)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <StyledDeleteBtn onClick={handleOnClick}></StyledDeleteBtn>
    </div>
  );
}

export default DeleteBtn;
