import React, { useState } from 'react'

import style from './style.module.scss'
import { useDispatch } from 'react-redux'
import { getByYear, getWithYear } from '../../redux/slices/yearSlice'
import { useAppSelector } from '../../hooks/Hooks'
export const SortYear = () => {
	let oldYear = 1960
	let newYear = 2023
	const oldAllYear: number[] = []
	const newAllYear: number[] = []
	for (let i = oldYear; i <= newYear; i++) {
		oldAllYear.push(i)
	}
	for (let i = newYear; i >= oldYear; i--) {
		newAllYear.push(i)
	}
	const dispatch = useDispatch()
	const { byYear, withYear } = useAppSelector(state => state.year)
	const [hwithYear, setWithYear] = useState<string>(withYear)

	const handleWithYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setWithYear(e.target.value)
		dispatch(getWithYear(e.target.value))
	}
	const [hbyYear, setByYear] = useState<string>(byYear)
	const handleByYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setByYear(e.target.value)

		dispatch(getByYear(e.target.value))
	}
	console.log(withYear)
	return (
		<div>
			<div className={style.content}>
				<div className=''>
					<span>с</span>
					<select
						className={style.select}
						value={withYear}
						onChange={handleWithYear}
					>
						{oldAllYear.map(year => (
							<option className={style.option} key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</div>

				<div className=''>
					<span>по</span>
					<select
						className={style.select}
						value={byYear}
						onChange={handleByYear}
					>
						{newAllYear.map(year => (
							<option className={style.option} key={year}>
								{year}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	)
}
