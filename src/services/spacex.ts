import { type Doc, type APISpaceXResponse } from '../types/api'
import { type APISpacexCrew } from '../types/apiCrew'

export const getLaunchtBy = async ({ id }: { id: string }) => {
	const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

	const launch = (await res.json()) as Doc

	console.log(launch)
	return launch
}

export const getLatestLaunches = async () => {
	const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: {},
			options: {
				sort: {
					date_unix: 'asc',
				},
				limit: 12,
				page: 1,
			},
		}),
	})
	const { docs: launches } = (await res.json()) as APISpaceXResponse

	console.log(launches)
	return launches
}

export const getCrew = async (page = 1) => {
	const res = await fetch('https://api.spacexdata.com/v4/crew/query', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: {},
			options: {
				sort: {
					date_unix: 'asc',
				},
				limit: 9,
				page: page,
			},
		}),
	})
	const { docs: crews } = (await res.json()) as APISpacexCrew

	console.log(crews)
	return crews
}
