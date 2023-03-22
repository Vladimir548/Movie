import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { HomeMovieServices } from '../../services/home-movie-services'
import style from './style.module.scss'
import { Loading } from '../loading/Loading'
import { SerialItem } from '../serial/serial-item/SerialItem'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import { NewsCinemaItem } from './news-cinema-item/NewsCinemaItem'
export const NewsCinema = () => {
	const [page, setPage] = useState(1)
	const {
		data: docs,
		isLoading,
		error
	} = useQuery(['new-cinema', page], () =>
		HomeMovieServices.getNewsCinema(page)
	)
	return (
		<div className={'container'}>
			{isLoading && <Loading />}
			<div className='flex flex-wrap justify-center gap-3'>
				{docs?.docs.map(item => (
					<NewsCinemaItem key={item.id} movie={item} />
				))}
			</div>
			<Stack className={'my-3 flex justify-center mx-auto'} spacing={2}>
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
