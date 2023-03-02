import React, { useRef, useState } from 'react'

import style from './style.module.scss'
import { Slider } from '@mui/material'
import { useAppDispatch } from '../../hooks/Hooks'
import { getMaxRating, getMinRating } from '../../redux/slices/ratingSlice'

export const SortRatings = () => {
	function valuetext(value: number) {
		return `${value}°C`
	}

	const [value, setValue] = React.useState<number[]>([1, 10])
	const dispatch = useAppDispatch()
	// const minRange = value[0]
	// const maxRange = value[1]
	const handleChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number[])
		dispatch(getMinRating(value[0]))
		dispatch(getMaxRating(value[1]))
	}
	return (
		<div className={style.range_slider}>
			<div className='flex justify-between'>
				<p>Рейтинг</p>
				<p>
					От {value[0]} до {value[1]}
				</p>
			</div>
			<Slider
				min={1}
				max={10}
				getAriaLabel={() => 'Temperature range'}
				value={value}
				onChange={handleChange}
				getAriaValueText={valuetext}
				tabIndex={0}
			/>
		</div>
	)
}
