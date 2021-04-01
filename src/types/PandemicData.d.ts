export type PandemicData = {
	date: string
	source: {
		nom: string
	}
	sourceType: string
	casConfirmes: number
	deces: number
	decesEhpad: number
	hospitalises: number
	reanimation: number
	gueris: number
	casEhpad: number
	casConfirmesEhpad: number
	casPossiblesEhpad: number
	nom: string
	code: string
}

export type PandemicIndicatorsData = Omit<
	PandemicData,
	"date" | "source" | "sourceType" | "nom" | "code"
>
