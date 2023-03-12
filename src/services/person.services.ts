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
	async getMovieWithPerson(id: string) {
		const response = await axios.get<IMovieResponse>(`/movie/${id}`, {
			params: {
				selectFields: 'poster rating.kp name',
				limit: 899
			},
			headers: {
				'X-API-KEY': token
			}
		})
		return response.data
	}
}
