import { Fragment, useEffect } from "react"
import { ThemeProvider } from "styled-components"

import theme, { GlobalStyle } from "./theme"

export default function App({ Component, pageProps }) {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles && jssStyles.parentNode)
			jssStyles.parentNode.removeChild(jssStyles)
	}, [])

	return (
		<Fragment>
			<GlobalStyle />

			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Fragment>
	)
}
