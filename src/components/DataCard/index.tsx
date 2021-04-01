import { ReactElement } from "react"
import TrendingUpIcon from "@material-ui/icons/TrendingUp"
import TrendingDownIcon from "@material-ui/icons/TrendingDown"

import { PandemicIndicatorsData } from "types/PandemicData"

import * as S from "./styles"
import formatNumber from "helpers/formatNumber"

type DataCardProps = {
	type: keyof PandemicIndicatorsData
	data: number
	evolution: number | null
}

const matchingType: { [key in keyof PandemicIndicatorsData]: string } = {
	casConfirmes: "Cas confirmés",
	deces: "Personnes décédées",
	decesEhpad: "Personnes décédées en EHPAD",
	hospitalises: "Personnes hospitalisés",
	reanimation: "Personnes en réanimation",
	gueris: "Personnes guéries",
	casEhpad: "Cas en EHPAD",
	casConfirmesEhpad: "Cas confirmés en EHPAD",
	casPossiblesEhpad: "Cas possibles en EHPAD",
}

const matchingColors: { [key in keyof PandemicIndicatorsData]: string } = {
	casConfirmes: "#5FC2D9",
	deces: "#D93B3B",
	decesEhpad: "#D93B3B",
	hospitalises: "#F2AE30",
	reanimation: "#F2AE30",
	gueris: "#5FC2D9",
	casEhpad: "#5FC2D9",
	casConfirmesEhpad: "#5FC2D9",
	casPossiblesEhpad: "#23518C",
}

export default function DataCard({
	type,
	data,
	evolution,
}: DataCardProps): ReactElement {
	return (
		<S.Card>
			<S.Label color={matchingColors[type]}>{matchingType[type]}</S.Label>
			<S.Number>
				{formatNumber(data)}{" "}
				{evolution !== null && (
					<S.Evolution increase={evolution > 0}>
						{evolution > 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
						{Math.abs(evolution).toFixed(2)}%
					</S.Evolution>
				)}
			</S.Number>
		</S.Card>
	)
}
