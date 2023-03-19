import axios from 'axios'
import { IMovie, IMovieResponse } from '../models/movie.interface'
import { Studios } from '../models/studios.interface'

axios.defaults.baseURL = 'https://api.kinopoisk.dev/v1'
const token = 'TY793WZ-Y9R45VN-KHZ5AH3-HXZK3GS'

export const HomeMovieServices = {
	async getNewCinema() {
		const response = await axios.get<IMovieResponse>('/movie', {
			params: {
				sortField: 'rating.kp',
				year: 2023,
				limit: 30
			},
			headers: {
				'X-API-KEY': token
			}
		})
		return response.data
	},
	async getTopTenCinema() {
		const response = await axios.get<IMovieResponse>('/movie?top10=!null', {
			params: {
				sortField: 'rating.kp'
			},
			headers: {
				'X-API-KEY': token
			}
		})
		return response.data
	},
	async getCarouselMovie() {
		const currentData = new Date()
		const futureData = new Date(
			currentData.setMonth(currentData.getMonth() + 4)
		)

		const response = await axios.get<IMovieResponse>(`/movie?poster=!null`, {
			params: {
				page: 1,
				limit: 1000,
				sortField: 'votes.await',
				selectFields: 'premiere poster name id',
				'premiere.world': `${new Date().toLocaleDateString()}-${futureData.toLocaleDateString()}`
			},
			headers: {
				'X-API-KEY': token
			}
		})
		return response.data
	},
	async getBackdropMovie() {
		const response = await axios.get<IMovieResponse>(
			`/movie?id=409424&id=1316601&id=1322324&selectFields=backdrop id shortDescription rating.kp name alternativeName year ageRating videos movieLength`,
			{
				params: {},
				headers: {
					'X-API-KEY': token
				}
			}
		)
		return response.data
	}
}
