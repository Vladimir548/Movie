import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../services/movie.services'
import { MovieItem } from './MovieItem'
import { Loading } from '../loading/Loading'

import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
export const Movie = () => {
	const [page, setPage] = useState(1)

	const {
		data: docs,
		error,
		isLoading
	} = useQuery(['docs', page], () => MovieServices.getMovie(page), {})

	return (
		<div>
			{isLoading && <Loading />}

			<div className='flex flex-wrap justify-center gap-3'>
				{docs?.docs.map(movie => (
					<MovieItem key={movie.id} movie={movie} />
				))}
			</div>
			<Stack
				className={'max-w-[300px] mx-auto mt-3 flex justify-center '}
				spacing={2}
				sx={{
					'.css-1ysyrvn-MuiButtonBase-root-MuiPaginationItem-root': {
						color: '#fff'
					},
					'.css-1ysyrvn-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected':
						{
							color: '#fff',
							border: '1px solid rgba(25, 118, 210)',
							background: 'rgba(25, 118, 210, 0.52)'
						},

					'.css-1scal0h-MuiPaginationItem-root': {
						color: '#fff'
					}
				}}
			>
				<Pagination
					count={docs?.pages}
					onChange={(_, num) => setPage(num)}
					shape='circular'
					color='primary'
					variant='outlined'
					size={'large'}
				/>
			</Stack>
		</div>
	)
}
