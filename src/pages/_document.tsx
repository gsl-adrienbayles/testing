import NextDocument, { Head, Html, Main, NextScript } from "next/document"
import { Children, Fragment } from "react"
import { ServerStyleSheet as StyledServerStyleSheets } from "styled-components"
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles"

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<title>Testing</title>
					<meta name="description" content="Testing App exemple" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;800;900&display=swap"
						rel="stylesheet"
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

Document.getInitialProps = async ctx => {
	const styledSheets = new StyledServerStyleSheets()
	const materialUiSheets = new MaterialUiServerStyleSheets()
	const originalRenderPage = ctx.renderPage
	try {
		const initialProps = await NextDocument.getInitialProps(ctx)

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: App => props =>
					styledSheets.collectStyles(
						materialUiSheets.collect(<App {...props} />)
					),
			})

		return {
			...initialProps,
			styles: [
				<Fragment key="styles">
					{initialProps.styles}
					{materialUiSheets.getStyleElement()}
					{styledSheets.getStyleElement()}
				</Fragment>,
			],
		}
	} finally {
		styledSheets.seal()
	}
}
