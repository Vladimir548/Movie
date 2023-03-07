import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { SerialsServices } from '../../services/serials.services'
import { SerialItem } from './serial-item/SerialItem'
import { Loading } from '../loading/Loading'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

export const Serial = () => {
	const [page, setPage] = useState(1)
	const {
		data: docs,
		isLoading,
		error
	} = useQuery(['serials', page], () => SerialsServices.getSerials(page), {})

	return (
		<div>
			{isLoading && <Loading />}
			<div className='flex flex-wrap justify-center gap-3'>
				{docs?.docs.map(serial => (
					<SerialItem key={serial.id} serial={serial} />
				))}
			</div>
			<Stack
				className={'max-w-[300px]   mt-3 flex justify-center mx-auto'}
				spacing={1}
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
