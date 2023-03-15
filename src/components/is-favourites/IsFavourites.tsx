import React from 'react'
import {
	addToFavorites,
	removeToFavorites
} from '../redux/slices/favouritesSlice'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from '../hooks/Hooks'
import { IMovie } from '../../models/movie.interface'

interface IIsFavourites {
	typeCinema?: IMovie
}

export const IsFavourites = ({ typeCinema }: IIsFavourites) => {
	const dispatch = useAppDispatch()
	const { currentItem } = useAppSelector(state => state.favourites)
	const isInFavourites = currentItem.some(item => item.id === typeCinema?.id)
	return (
		<span
			className='cursor-pointer'
			onClick={
				isInFavourites
					? () => dispatch(removeToFavorites(typeCinema!.id))
					: () => dispatch(addToFavorites(typeCinema!))
			}
		>
			{isInFavourites ? (
				<FavoriteIcon color={'error'} />
			) : (
				<FavoriteBorderIcon color={'error'} />
			)}
		</span>
	)
}
