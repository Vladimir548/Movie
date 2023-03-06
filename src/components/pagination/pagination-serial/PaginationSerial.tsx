import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/Hooks'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import arrow from '../../../img/arrow.svg'
import style from './style.module.scss'
import {
	handleNextPageNumberSerial,
	handlePrevPageNumberSerial
} from '../../redux/slices/paginationSlice'

export const PaginationSerial: FC = () => {
	const { pageNumberSerial } = useAppSelector(state => state.pagination)

	const dispatch = useAppDispatch()

	const handleNextPage = () => {
		dispatch(handleNextPageNumberSerial())
	}
	const handlePrevPage = () => {
		dispatch(handlePrevPageNumberSerial())
	}

	return (
		<div>
			<div className={style.pagination_btn}>
				<button
					disabled={pageNumberSerial === 1}
					className={style.prev}
					onClick={() => handlePrevPage()}
				>
					<img src={arrow} alt='' />
				</button>
				<span>Страница: {pageNumberSerial}</span>
				<button className={style.next} onClick={() => handleNextPage()}>
					<img src={arrow} alt='' />
				</button>
			</div>
		</div>
	)
}
