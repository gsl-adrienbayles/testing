import styled from "styled-components"

import { Card } from "components/DataCard/styles"

export const Wrapper = styled.section`
	padding: 1.5rem 0 0;

	> ${Card} + ${Card} {
		margin-top: 1rem;
	}
`
