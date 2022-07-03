import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
  --white: #fff;
  --gray-100: #f2f2f2;
  --gray-200: #d9d9d9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1a1a1a;
  --gray-700: #0d0d0d;
  --gray-800: #202024;
  --gray-900: #121214;

  --blue:#4ea8de;
  --blue-dark: #1e6f9f;

  --purple: #8284fa;
  --purple-dark: #5e60ce;

  --danger: #e25858;
}
 
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
  outline: 2px solid var(--purple-dark);
 }

 body {
  background: var(--gray-600);
  color: var(--gray-300);
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
`