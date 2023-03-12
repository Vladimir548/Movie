import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../services/movie.services'
import { MovieItem } from './MovieItem'
import { Loading } from '../loading/Loading'
import style from './style.module.scss'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
export const Movie = () => {
	const [page, setPage] = useState(1)

	const {
		data: docs,
		error,
		isLoading
	} = useQuery(['docs', page], () => MovieServices.getMovie(page), {})

	return (
		<div className={'container'}>
			{isLoading && <Loading />}

			<div className='flex flex-wrap justify-center gap-3'>
				{docs?.docs.map(movie => (
					<MovieItem key={movie.id} movie={movie} />
				))}
			</div>
			<Stack className={'my-3 flex justify-center mx-auto '} spacing={2}>
				<Box sx={{ size: { xs: 'small', sm: 'large' } }}>
					<Pagination
						count={docs?.pages}
						onChange={(_, num) => setPage(num)}
						shape='circular'
						color='primary'
						variant='outlined'
						siblingCount={0}
						className={style.pagination}
					/>
				</Box>
			</Stack>
		</div>
	)
}
