import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { SerialsServices } from '../../services/serials.services'
import { SerialItem } from './serial-item/SerialItem'
import { useAppSelector } from '../hooks/Hooks'
import { PaginationSerial } from '../pagination/pagination-serial/PaginationSerial'
import { Loading } from '../loading/Loading'

export const Serial = () => {
	const pageNumber = useAppSelector(state => state.pagination.pageNumberSerial)
	const {
		data: docs,
		isLoading,
		error
	} = useQuery(
		['serials', pageNumber],
		() => SerialsServices.getSerials(pageNumber),
		{
			select: ({ docs }) => docs
		}
	)
	return (
		<div>
			{isLoading && <Loading />}
			<div className='flex flex-wrap justify-center gap-3'>
				{docs?.map(serial => (
					<SerialItem key={serial.id} serial={serial} />
				))}
			</div>
			<div className={'my-3'}>
				<PaginationSerial />
			</div>
		</div>
	)
}
