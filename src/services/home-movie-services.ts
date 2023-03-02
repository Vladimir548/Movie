import axios from 'axios'
import { IMovieResponse } from '../models/movie.interface'

axios.defaults.baseURL = 'https://api.kinopoisk.dev/v1'
const token = 'TY793WZ-Y9R45VN-KHZ5AH3-HXZK3GS'

export const HomeMovieServices = {
	async getNewCinema() {
		const response = await axios.get<IMovieResponse>('/movie', {
			params: {
				token: token,
				sortField: 'rating.kp',
				year: 2023,
				limit: 30
			}
		})
		return response.data
	}
}
