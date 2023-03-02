import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../../services/movie.services'
import { useAppDispatch, useAppSelector } from '../../hooks/Hooks'
import {
	addCountries,
	removeCountries
} from '../../redux/slices/countriesSlice'
import style from './style.module.scss'

export const SortCountries = () => {
	const dispatch = useAppDispatch()
	const countriesItem = useAppSelector(state => state.countries.countriesValue)
	const {
		data: countries,
		error,
		isLoading
	} = useQuery(['docs'], () => MovieServices.getCountriesMovie())

	return (
		<div className={style.scroll}>
			<div className=''>
				{countries?.map(countrie => (
					<h2
						className={
							countriesItem.some(item => item.slug === String(countrie.slug))
								? 'cursor-pointer border-red-600 border-2 py-2 px-3 rounded-md mb-1 first-letter:uppercase  hover:border-red-800'
								: 'cursor-pointer border-blue-600 border-2 py-2 px-3 rounded-md mb-1 first-letter:uppercase  hover:border-blue-800'
						}
						key={countrie.slug}
						onClick={() =>
							countriesItem.some(item => item.slug === countrie.slug)
								? dispatch(removeCountries(countrie.slug))
								: dispatch(addCountries(countrie))
						}
					>
						{countrie.name}
					</h2>
				))}
			</div>
		</div>
	)
}
