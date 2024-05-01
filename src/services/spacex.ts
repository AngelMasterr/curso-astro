import { type Doc, type APISpaceXResponse } from '../types/api'

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
			},
		}),
	})
	const { docs: launches } = (await res.json()) as APISpaceXResponse

	console.log(launches)
	return launches
}

export const getAllLaunches = async () => {
	let allLaunches: any[] = []
	let currentPage = 1
	let totalPages = 2 // Este valor puede variar dependiendo de la respuesta de la API

	while (currentPage <= totalPages) {
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
					limit: 6,
					page: currentPage, // Solicitar la página actual
				},
			}),
		})

		const { docs: launches } = (await res.json()) as APISpaceXResponse
		allLaunches = [...allLaunches, ...launches]
		currentPage++
	}

	console.log(allLaunches)
	return allLaunches
}
