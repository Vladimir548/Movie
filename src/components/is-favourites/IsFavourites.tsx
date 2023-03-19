import React, { useEffect, useState } from 'react'
import {
	addToFavorites,
	removeToFavorites
} from '../redux/slices/favouritesSlice'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from '../hooks/Hooks'
import { IMovie } from '../../models/movie.interface'
import style from './style.module.scss'

interface IIsFavourites {
	typeCinema?: IMovie
}

export const IsFavourites = ({ typeCinema }: IIsFavourites) => {
	const dispatch = useAppDispatch()
	const { currentItem } = useAppSelector(state => state.favourites)
	const isInFavourites = currentItem.some(item => item.id === typeCinema?.id)
	const [item, setItem] = useState(currentItem)
	const [add, setAdd] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	useEffect(() => {
		setItem(currentItem)
		if (currentItem.length > item.length) return setAdd(true)
		if (currentItem.length < item.length) return setAdd(false)
	}, [currentItem])
	useEffect(() => {
		if (isVisible) {
			const timeout = setTimeout(() => {
				setIsVisible(false)
			}, 2000)
			return () => clearTimeout(timeout)
		}
	}, [isVisible])

	return (
		<div>
			<span
				className='cursor-pointer '
				onClick={
					isInFavourites
						? () =>
								dispatch(removeToFavorites(typeCinema!.id)) &&
								setIsVisible(true)
						: () => dispatch(addToFavorites(typeCinema!)) && setIsVisible(true)
				}
			>
				{isInFavourites ? (
					<FavoriteIcon color={'error'} />
				) : (
					<FavoriteBorderIcon color={'error'} />
				)}
			</span>
			<div>
				<div className={isVisible === true ? style.alert : style.alertNone}>
					<p className={'py-4 px-4'}>
						{add === true ? 'Добавлено в избранное' : 'Удалено из избранного'}
					</p>
				</div>
			</div>
		</div>
	)
}
