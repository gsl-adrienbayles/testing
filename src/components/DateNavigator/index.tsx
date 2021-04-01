import { ReactElement } from "react"

import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import IconButton from "@material-ui/core/IconButton"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

type DateNavigatorProps = {
	date: string
	forward: () => void
	backward: () => void
}

export default function DateNavigator({
	date,
	forward,
	backward,
}: DateNavigatorProps): ReactElement {
	return (
		<ButtonGroup fullWidth>
			<IconButton color="primary" onClick={backward}>
				<ArrowBackIosIcon />
			</IconButton>
			<Button variant="text" color="primary" size="large">
				{date}
			</Button>
			<IconButton color="primary" onClick={forward}>
				<ArrowForwardIosIcon />
			</IconButton>
		</ButtonGroup>
	)
}
