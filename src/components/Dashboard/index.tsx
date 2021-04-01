import { ReactElement } from "react"

import DataCard from "components/DataCard"
import { PandemicData, PandemicIndicatorsData } from "types/PandemicData"

import * as S from "./styles"
import computeDiff from "helpers/computeDiff"

type DashboardProps = PandemicIndicatorsData & {
	prevData: PandemicData | null
}

export default function Dashboard({
	prevData,
	...datas
}: DashboardProps): ReactElement {
	return (
		<S.Wrapper>
			{Object.entries(datas).map(([key, value]) => {
				if (value)
					return (
						<DataCard
							key={key}
							type={key as keyof PandemicIndicatorsData}
							data={value}
							evolution={prevData ? computeDiff(prevData[key], value) : null}
						/>
					)
				return null
			})}
		</S.Wrapper>
	)
}
