import axios from "axios"
import { PandemicData } from "../types/PandemicData"

const formatDate = (date: Date) => {
	let month = "" + (date.getMonth() + 1)
	let day = "" + date.getDate()
	let year = date.getFullYear()

	if (month.length < 2) month = "0" + month
	if (day.length < 2) day = "0" + day

	return [year, month, day].join("-")
}

export default async function fetchPandemicData(): Promise<PandemicData[]> {
	try {
		const today = new Date()
		const dates: string[] = []

		for (let i = 0; i < 7; i++)
			dates.push(formatDate(new Date(today.setDate(today.getDate() - 1))))

		const data: PandemicData[] = []
		await Promise.all(
			dates.map(async date => {
				const res = await axios({
					method: "GET",
					url: `http://localhost:3000/api/pandemicData?date=${date}`,
				})

				data.push(...res.data.data)
			})
		)

		return data.sort(
			({ date: a }, { date: b }) =>
				new Date(a).getTime() - new Date(b).getTime()
		)
	} catch (error) {
		console.error(error)
		return Promise.reject("Oups an error occured!")
	}
}
