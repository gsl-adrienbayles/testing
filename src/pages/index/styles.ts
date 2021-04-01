import styled from "styled-components"

export const Header = styled.header`
	position: sticky;
	top: 0;
	z-index: 100;
	background-color: #fff;
	transition: all 0.7s ease-in;
	border-bottom: 0.5px solid #f3f3f3;
`

export const Heading = styled.span`
	font-weight: 500;
	font-size: 2rem;
`

export const BoldHeading = styled.b`
	font-weight: 900;
`

export const Main = styled.main`
	flex: 1;
	position: relative;

	span.MuiButton-label {
		font-weight: 600;
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	min-height: 100vh;

	${Main},
	${Header} {
		padding: 1rem 1.5rem;
		background-color: #fafafa;
	}
`

export const Source = styled.span`
	position: absolute;
	bottom: 1rem;
	right: 1.5rem;

	font-size: 0.75rem;
	font-weight: 300;
`
