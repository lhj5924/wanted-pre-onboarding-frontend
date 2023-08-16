import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';
import { GlobalStyle } from './Styles/GlobalStyle';
import { UserDispatch } from './Context/Contest';

import { Main, Signup, Login, Todo } from './Pages';

function App() {
  return (
    <>
      <UserDispatch.Provider value={dispatch}>
        <GlobalStyle />
        <StyledApp className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </BrowserRouter>
        </StyledApp>
      </UserDispatch.Provider>
    </>
  );
}

export default App;

// === Styled Components ===

const StyledApp = styled.div`
  width: 100vw;
  text-align: center;
`;
