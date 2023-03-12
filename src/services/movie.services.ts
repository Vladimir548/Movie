import axios from 'axios'
import { IGenres, IMovie, IMovieResponse } from '../models/movie.interface'

axios.defaults.baseURL = 'https://api.kinopoisk.dev/v1'
const token = 'TY793WZ-Y9R45VN-KHZ5AH3-HXZK3GS'
export const MovieServices = {
	async getMovie(page: number) {
		const response = await axios.get<IMovieResponse>(`/movie`, {
			params: {
				token: token,
				page: page,
				type: 'movie',
				limit: 35
			}
		})
		return response.data
	},
	async getIDMovie(id: string) {
		const response = await axios.get<IMovie>(`/movie/${id}`, {
			params: {
				token: token
			}
		})
		return response.data
	},
	async getSearchMovie(name: string) {
		const response = await axios.get<IMovieResponse>(`/movie`, {
			params: {
				name: name,
				token: token,
				sortField: 'rating.kp',
				limit: 50
			}
		})

		return response.data
	},
	async dropMovie(name: string) {
		const response = await axios.get<IMovieResponse>('/movie?', {
			params: {
				token: token,

				name: name,
				'rating.kp': '4 - 10',
				sortField: 'votes.kp',
				limit: 30
			}
		})
		return response.data
	},
	async getGenresMovie() {
		const response = await axios.get<IGenres[]>(
			'movie/possible-values-by-field?field=genres.name',
			{
				params: {
					token: token
				}
			}
		)

		return response.data
	},
	async getCountriesMovie() {
		const response = await axios.get<IGenres[]>(
			'movie/possible-values-by-field?field=countries.name&top10=countries.name',
			{
				params: {
					token: token
				}
			}
		)

		return response.data
	},
	async getByGenresMovie(
		genre?: string,
		minRating?: number,
		maxRating?: number,
		countrie?: string,
		withYear?: string,
		byYear?: string,
		page?: number
	) {
		const response = await axios.get<IMovieResponse>(
			`/movie?rating.kp=${minRating}-${maxRating}&${
				genre?.length !== 0 ? `genres.name=${genre}` : ''
			}&${
				countrie?.length !== 0 ? `countries.name=${countrie}` : ''
			}&search=${withYear}-${byYear}&field=year`,
			{
				params: {
					token: token,
					limit: 36,
					page: page
				}
			}
		)

		return response.data
	}
}
