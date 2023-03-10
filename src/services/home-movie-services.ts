import axios from 'axios'
import { IMovie, IMovieResponse } from '../models/movie.interface'

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
	},
	async getTopTenCinema() {
		const response = await axios.get<IMovieResponse>('/movie?top10=!null', {
			params: {
				token: token,
				sortField: 'rating.kp'
			}
		})
		return response.data
	},
	async getCarouselMovie() {
		const response = await axios.get<IMovieResponse>(
			`/movie?premiere.world=15.03.2023-15.06.2023&poster=!null`,
			{
				params: {
					token: token,
					page: 1,
					limit: 1000,
					sortField: 'votes.await',
					selectFields: 'premiere poster name id'
				}
			}
		)
		return response.data
	},
	async getBackdropMovie() {
		const response = await axios.get<IMovieResponse>(
			`/movie?id=409424&id=1316601&id=1227967&selectFields=backdrop id shortDescription rating.kp name alternativeName year ageRating videos movieLength`,
			{
				params: {
					token: token
				}
			}
		)
		return response.data
	}
}
