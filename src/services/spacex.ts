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
			'Content-Type': 'aplication/json',
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
	// crear la var 'data' donde vamos a extrar el archvio json
	// const data = JSON.stringfy(await res.json())
	// console.log(data) --> de aca se extrae el json como string y luego lo pasamos a TypeScript con "app.quicktype.io"
	// creamos un archivo api.ts en la carpeta 'components' para guardar el typescript
	const { docs: launches } = (await res.json()) as APISpaceXResponse

	console.log(launches)
	return launches
}
