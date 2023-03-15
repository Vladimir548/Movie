import React from 'react'
import { IMovie } from '../../../models/movie.interface'
import style from './style.module.scss'
import star from '../../../img/star.svg'
import { Link } from 'react-router-dom'
import { Card } from '../../card/Card'
import { useAppDispatch, useAppSelector } from '../../hooks/Hooks'
import {
	addToFavorites,
	removeToFavorites
} from '../../redux/slices/favouritesSlice'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IsFavourites } from '../../is-favourites/IsFavourites'

export const CartoonItem: React.FC<{ cartoon: IMovie }> = ({ cartoon }) => {
	const dispatch = useAppDispatch()
	const { currentItem } = useAppSelector(state => state.favourites)
	const isInFavourites = currentItem.some(item => item.id === cartoon?.id)
	return (
		<div className={style.container}>
			<div className={style.cellphone_container}>
				<div className={style.movie}>
					<div
						className={style.movie_img}
						style={{ backgroundImage: `url(${cartoon?.poster?.url})` }}
					></div>
					<div className={style.text_movie_cont}>
						<div className={style.mr_grid}>
							<div className={style.col1}>
								<h1 className={style.name_movie}>{cartoon?.name}</h1>
								<ul className={style.movie_gen}>
									<li>
										<span className={'flex items-center text-blue-500'}>
											<img className={'fill-amber-400'} src={star} alt='' />
											{Number(cartoon.rating.kp.toFixed(1))}{' '}
										</span>{' '}
										/
									</li>
									<li>{cartoon?.year}/</li>
									<li>{cartoon?.movieLength} мин /</li>
									<li>{cartoon.genres[0].name}</li>
								</ul>
							</div>
						</div>
						<div className={style.mr_grid}>
							<div className={style.col2}>
								<ul className={style.movie_likes}></ul>
							</div>
						</div>
						<div className={style.mr_grid}>
							<div className={style.col1}>
								<p className={style.movie_description}>
									{cartoon?.shortDescription}
								</p>
							</div>
						</div>
					</div>
					<div className={style.bottom_content}>
						<div className=''>
							<Link to={`/cinema/${cartoon.id}/${cartoon.name}`}>
								<button className={style.more}>Подробнее</button>
							</Link>
						</div>
						<div className=''>
							<IsFavourites typeCinema={cartoon} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export {}
