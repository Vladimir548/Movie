import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CartoonsServices } from '../../services/cartoons.services'
import { Loading } from '../loading/Loading'
import { CartoonItem } from './cartoon-item/CartoonItem'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import style from './style.module.scss'
export const Cartoon = () => {
	const [page, setPage] = useState(1)

	const {
		data: docs,
		isLoading,
		error
	} = useQuery(['cartoons', page], () => CartoonsServices.getCartoons(page))
	return (
		<div>
			{isLoading && <Loading />}
			<div className='flex flex-wrap justify-center gap-3'>
				{docs?.docs.map(cartoon => (
					<CartoonItem key={cartoon.id} cartoon={cartoon} />
				))}
			</div>
			<Stack className={' my-3 flex justify-center mx-auto'} spacing={1}>
				<Pagination
					count={docs?.pages}
					onChange={(_, num) => setPage(num)}
					shape='circular'
					color='primary'
					variant='outlined'
					size={'large'}
					className={style.pagination}
				/>
			</Stack>
		</div>
	)
}
