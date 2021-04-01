import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const theme = {
	colors: {
		primary: "#5897A6",
		secondary: "#569EA6",
		tertiary: "#012326",
	},
}

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	font-family: 'Inter', sans-serif;
  }
`

export default theme
