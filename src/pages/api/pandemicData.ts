import { NextApiRequest, NextApiResponse } from "next"

import { PandemicData } from "types/PandemicData"

const dateValidator = (date: string) =>
	/^(2020|2021)\-((0?[1-9])|(1[0-2]))\-(0?[1-9]|[12]\d|3[01])$/.test(date)

export default async function getPandemicData(
	{ query }: NextApiRequest,
	res: NextApiResponse
) {
	if (!("date" in query) || typeof query.date !== "string") {
		res.status(400).json({ error: "Parameters `date` is missing" })
		return
	} else if (!dateValidator(query.date)) {
		res.status(400).json({ error: "Bad date format (should be YYYY-MM-DD)" })
		return
	}

	try {
		const { date } = query
		const data = (await (
			await fetch(
				`https://coronavirusapi-france.now.sh/FranceGlobalDataByDate?date=${date}`
			)
		).json()) as { FranceGlobalDataByDate: PandemicData[] }

		res.status(200).json({ data: data.FranceGlobalDataByDate })
	} catch (error) {
		res.status(500).json({ error: "An error occured" })
	}
}
