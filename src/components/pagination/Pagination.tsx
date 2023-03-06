import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/Hooks'
import {
	handleNextPageNumberMovie,
	handlePrevPageNumberMovie
} from '../redux/slices/paginationSlice'

import arrow from '../../img/arrow.svg'
import style from './style.module.scss'

export const Pagination: FC = () => {
	const { pageNumberMovie, pageNumberSerial } = useAppSelector(
		state => state.pagination
	)

	const dispatch = useAppDispatch()

	const handleNextPage = () => {
		dispatch(handleNextPageNumberMovie())
	}
	const handlePrevPage = () => {
		dispatch(handlePrevPageNumberMovie())
	}

	return (
		<div>
			<div className={style.pagination_btn}>
				<button
					disabled={pageNumberMovie === 1 || pageNumberSerial === 1}
					className={style.prev}
					onClick={() => handlePrevPage()}
				>
					<img src={arrow} alt='' />
				</button>
				<span>Страница: {pageNumberMovie || pageNumberSerial}</span>
				<button className={style.next} onClick={() => handleNextPage()}>
					<img src={arrow} alt='' />
				</button>
			</div>
		</div>
	)
}
