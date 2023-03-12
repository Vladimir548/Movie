import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { SerialsServices } from '../../services/serials.services'
import { SerialItem } from './serial-item/SerialItem'
import { Loading } from '../loading/Loading'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import style from './style.module.scss'
import Box from '@mui/material/Box'
export const Serial = () => {
	const [page, setPage] = useState(1)
	const {
		data: docs,
		isLoading,
		error
	} = useQuery(['serials', page], () => SerialsServices.getSerials(page), {})

	return (
		<div className={'container'}>
			{isLoading && <Loading />}
			<div className='flex flex-wrap justify-center gap-3'>
				{docs?.docs.map(serial => (
					<SerialItem key={serial.id} serial={serial} />
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
