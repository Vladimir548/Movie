import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../../services/movie.services'

import { useAppDispatch, useAppSelector } from '../../hooks/Hooks'
import { addGenres, removeGenres } from '../../redux/slices/genresSLice'
import { Link, useParams } from 'react-router-dom'
import { IGenres } from '../../../models/movie.interface'

import style from './style.module.scss'

export const SortGenres = () => {
	const param = useParams()
	const {
		data: genres,
		error,
		isLoading
	} = useQuery(['docs'], () => MovieServices.getGenresMovie())

	const dispatch = useAppDispatch()

	const genreItem = useAppSelector(state => state.genres.genre)

	const workGenre = (genre: IGenres) => {
		dispatch(addGenres(genre))
		dispatch(removeGenres(String(genre.slug)))
	}
	return (
		<div className={style.scroll}>
			<div className=''>
				{genres?.map(genre => (
					<h2
						className={
							genreItem.some(item => item.slug === String(genre.slug))
								? 'cursor-pointer border-red-600 border-2 py-2 px-3 rounded-md mb-1 first-letter:uppercase  hover:border-red-800'
								: 'cursor-pointer border-blue-600 border-2 py-2 px-3 rounded-md mb-1 first-letter:uppercase  hover:border-blue-800'
						}
						key={genre.slug}
						onClick={() =>
							genreItem.some(item => item.slug === genre.slug)
								? dispatch(removeGenres(genre.slug))
								: dispatch(addGenres(genre))
						}
					>
						{genre.name}
					</h2>
				))}
			</div>
		</div>
	)
}
