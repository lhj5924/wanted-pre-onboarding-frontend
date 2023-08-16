import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// * css reset 설정
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

// * 전역 디자인 설정
:root {
  --shadow: rgba(0,0,0,.3)
}


button {
  min-width: 1.4rem;
  min-height: 1.4rem;
  width: 100%;
  background-color: beige;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 0.1rem 0px 0px var(--shadow);
  &:hover {
    box-shadow: inset 0px .1rem 0px 0px var(--shadow);
    transition: all .3s;
  }
}
`;
export { GlobalStyle };
