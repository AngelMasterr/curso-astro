export type APISpacexCrew = {
	docs: DocCrew[]
	totalDocs: number
	limit: number
	totalPages: number
	page: number
	pagingCounter: number
	hasPrevPage: boolean
	hasNextPage: boolean
	prevPage: null
	nextPage: number
}

export type DocCrew = {
	name: string
	agency: Agency
	image: string
	wikipedia: string
	launches: string[]
	status: Status
	id: string
}

export enum Agency {
	Esa = 'ESA',
	Jaxa = 'JAXA',
	Nasa = 'NASA',
}

export enum Status {
	Active = 'active',
}
