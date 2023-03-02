import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/Hooks'
import {
	handleNextPageNumber,
	handlePrevPageNumber
} from '../redux/slices/paginationSlice'

import arrow from '../../img/arrow.svg'
import style from './style.module.scss'

export const Pagination: FC = () => {
	const pageNumber = useAppSelector(state => state.pagination.pageNumber)

	const dispatch = useAppDispatch()

	const handleNextPage = () => {
		dispatch(handleNextPageNumber())
	}
	const handlePrevPage = () => {
		dispatch(handlePrevPageNumber())
	}

	return (
		<div>
			<div className={style.pagination_btn}>
				<button
					disabled={pageNumber === 1}
					className={style.prev}
					onClick={() => handlePrevPage()}
				>
					<img src={arrow} alt='' />
				</button>
				<span>Страница: {pageNumber}</span>
				<button className={style.next} onClick={() => handleNextPage()}>
					<img src={arrow} alt='' />
				</button>
			</div>
		</div>
	)
}
