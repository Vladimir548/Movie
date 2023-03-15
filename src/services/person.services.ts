import axios from 'axios'
import { IPersonResponse } from '../models/person.interface'
import { IMovie, IMovieResponse } from '../models/movie.interface'

axios.defaults.baseURL = 'https://api.kinopoisk.dev/v1'
const token = 'TY793WZ-Y9R45VN-KHZ5AH3-HXZK3GS'

export const PersonServices = {
	async getPerson(id: string) {
		const response = await axios.get<IPersonResponse>(`/person/${id}`, {
			params: {},
			headers: {
				'X-API-KEY': token
			}
		})
		return response.data
	},
	async getMovieWithPerson(idM: number[]) {
		const response = await axios.post<IMovieResponse>(`/movie`, {
			params: {
				selectFields: 'poster rating.kp name',
				limit: 5,
				id: idM
			},
			headers: {
				'X-API-KEY': token
			}
		})
		return response.data
	}
}
