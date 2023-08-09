import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { styled, createGlobalStyle } from 'styled-components';

import { Main, Signup, Login, Todo } from './Pages';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

// === Styled Components ===

// * css reset 설정
const GlobalStyle = createGlobalStyle`
	/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	line-height: 1;
  width: 100vw;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  transition: background-color 0.5s ease;
  /* background-color: #fff; */
  background-color: lightskyblue;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul, li {
	list-style: none;
}
a {
  text-decoration: none;
  &:visited{
    color: inherit;
  }
  &:hover{
    text-decoration: underline;
  }
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
`;
const StyledApp = styled.div`
  width: 100vw;
  text-align: center;
`;
