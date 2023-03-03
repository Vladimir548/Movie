import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../services/movie.services'
import { MovieItem } from './MovieItem'
import { Pagination } from '../pagination/Pagination'
import { useAppSelector } from '../hooks/Hooks'
import { Loading } from '../loading/Loading'
import { PlaceholderSort } from '../sort/PlaceholderSort'
import { NestedModal } from '../modal/Modal'
import { SortYear } from '../sort/sort-year/SortYear'
import Box from '@mui/material/Box'
export const Movie = () => {
	const pageNumber = useAppSelector(state => state.pagination.pageNumber)

	const {
		data: docs,
		error,
		isLoading
	} = useQuery(['docs', pageNumber], () => MovieServices.getMovie(pageNumber), {
		select: ({ docs }) => docs
	})

	return (
		<div>
			{isLoading && <Loading />}

			<div className='flex flex-wrap justify-center gap-3'>
				{docs?.map(movie => (
					<MovieItem key={movie.id} movie={movie} />
				))}
			</div>
			<div className={'my-3'}>
				<Pagination />
			</div>
		</div>
	)
}
