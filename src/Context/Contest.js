import { createContext, useContext, useState } from 'react';

const TodoListContext = createContext();

function TodoListProvider({ children }) {
  const todoState = useState('default todolist');
  return (
    <TodoListContext.Provider value={todoState}>
      {children}
    </TodoListContext.Provider>
  );
}
function useTodoListState() {
  const value = useContext(TodoListContext);
  if (value === undefined) {
    throw new Error(
      'useMyContext should be used within TodoListContext.Provider',
    );
  }
  return value;
}
