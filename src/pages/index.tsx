import { Fragment, ReactElement, useEffect, useState } from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

import DateNavigator from "components/DateNavigator"
import fetchPandemicData from "services/fetchVaccin"
import { PandemicData } from "types/PandemicData"

import * as S from "./index/styles"
import Dashboard from "components/Dashboard"

export const getServerSideProps: GetServerSideProps<{
	pandemicData: PandemicData[]
}> = async () => {
	const pandemicData = await fetchPandemicData()
	return { props: { pandemicData } }
}

export default function Home({
	pandemicData,
}: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement {
	const [index, setIndex] = useState(pandemicData.length - 1)
	const [selectedData, setSelectedData] = useState<PandemicData | null>(null)

	function forward(): void {
		if (index < pandemicData.length - 1) setIndex(index + 1)
	}

	function backward(): void {
		if (index > 0) setIndex(index - 1)
	}

	useEffect(() => {
		setSelectedData(pandemicData[index])
	}, [index])

	return (
		<S.Wrapper>
			<S.Header>
				<S.Heading>
					<S.BoldHeading>COVID</S.BoldHeading>DATA
				</S.Heading>
			</S.Header>

			<S.Main>
				{selectedData && (
					<Fragment>
						<DateNavigator
							date={selectedData.date}
							forward={forward}
							backward={backward}
						/>

						<Dashboard
							casConfirmes={selectedData.casConfirmes}
							deces={selectedData.deces}
							decesEhpad={selectedData.decesEhpad}
							hospitalises={selectedData.hospitalises}
							reanimation={selectedData.reanimation}
							gueris={selectedData.gueris}
							casEhpad={selectedData.casEhpad}
							casConfirmesEhpad={selectedData.casConfirmesEhpad}
							casPossiblesEhpad={selectedData.casPossiblesEhpad}
							prevData={index > 0 ? pandemicData[index - 1] : null}
						/>

						<S.Source>source: {selectedData.source.nom}</S.Source>
					</Fragment>
				)}
			</S.Main>
		</S.Wrapper>
	)
}
