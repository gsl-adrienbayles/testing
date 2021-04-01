import styled from "styled-components"

export const Card = styled.article`
	padding: 1rem;
	min-height: 100px;
	border-radius: 8px;

	background-color: #fff;
`

export const Label = styled.span<{ color: string }>`
	color: ${({ color }) => color};
	font-weight: 600;
`

export const Number = styled.span`
	display: block;
	position: relative;
	margin-top: 1.5rem;
	font-size: 2.5rem;
	font-weight: 800;
`

export const Evolution = styled.span<{ increase: boolean }>`
	display: inline-flex;
	align-items: center;
	position: absolute;
	bottom: 0;
	margin-left: 1rem;

	font-size: 1rem;
	font-weight: 500;

	color: ${({ increase }) => (increase ? "#71D941" : "#F22738")};

	> * {
		margin-right: 0.25rem;
	}
`
