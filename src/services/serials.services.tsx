import axios from 'axios'
import { IMovieResponse } from '../models/movie.interface'

axios.defaults.baseURL = 'https://api.kinopoisk.dev/v1'
const token = 'TY793WZ-Y9R45VN-KHZ5AH3-HXZK3GS'
export const SerialsServices = {
	async getSerials(pageNumber: number) {
		const response = await axios.get<IMovieResponse>('/movie', {
			params: {
				type: 'tv-series',
				limit: 35,
				page: pageNumber
			},
			headers: {
				'X-API-KEY': token
			}
		})
		return response.data
	}
}
