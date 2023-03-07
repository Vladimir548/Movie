import axios from 'axios'
import { IMovieResponse } from '../models/movie.interface'

axios.defaults.baseURL = 'https://api.kinopoisk.dev/v1'
const token = 'TY793WZ-Y9R45VN-KHZ5AH3-HXZK3GS'
export const CartoonsServices = {
	async getCartoons(page: number) {
		const response = await axios.get<IMovieResponse>(`/movie`, {
			params: {
				token: token,
				type: 'cartoon',
				limit: 35,
				page: page
			}
		})
		return response.data
	}
}
