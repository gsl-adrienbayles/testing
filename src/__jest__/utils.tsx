import { Fragment, PropsWithChildren } from "react"

import { ThemeProvider } from "styled-components"
import { render as defaultRender, RenderResult } from "@testing-library/react"
import { RouterContext } from "next/dist/next-server/lib/router-context"
import { NextRouter } from "next/router"

import theme, { GlobalStyle } from "../pages/theme"

type DefaultParams = Parameters<typeof defaultRender>
type UIElement = DefaultParams[0]
type RenderOptions = DefaultParams[1] &
	Partial<{
		router: Partial<NextRouter>
		locale: string
		partner: string
		variant: string
		clientID: string
	}>

const mockRouter: Partial<NextRouter> = {
	basePath: "",
	pathname: "/",
	route: "/",
	asPath: "/",
	query: {},
	push: jest.fn(),
	replace: jest.fn(),
	reload: jest.fn(),
	back: jest.fn(),
	prefetch: jest.fn(),
	beforePopState: jest.fn(),
	events: {
		on: jest.fn(),
		off: jest.fn(),
		emit: jest.fn(),
	},
	isFallback: false,
}

function render(
	ui: UIElement,
	{ wrapper, router, ...renderOptions }: RenderOptions = {}
): RenderResult {
	if (!wrapper)
		wrapper = ({ children }: PropsWithChildren<unknown>) => (
			<Fragment>
				<GlobalStyle />

				<ThemeProvider theme={theme}>
					<RouterContext.Provider value={{ ...mockRouter, ...router }}>
						{children}
					</RouterContext.Provider>
				</ThemeProvider>
			</Fragment>
		)

	return defaultRender(ui, { wrapper, ...renderOptions })
}

export * from "@testing-library/react"

export { render }
