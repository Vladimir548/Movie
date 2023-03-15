import React from 'react'
import { ButtonBack } from '../../button-back/ButtonBack'
import { FavouritesNotFound } from '../favourites-not-found/FavouritesNotFound'
import { Link } from 'react-router-dom'
import style from '../style.module.scss'
import star from '../../../img/star.svg'
import { useAppSelector } from '../../hooks/Hooks'

import { IsFavourites } from '../../is-favourites/IsFavourites'

export const FavouritesCartoons = () => {
	const { currentItem } = useAppSelector(state => state.favourites)
	return (
		<div className={style.container}>
			<ButtonBack />
			{currentItem.filter(
				item => item.type === 'animated-series' || item.type === 'cartoon'
			).length === 0 ? (
				<div className={'flex flex-col justify-center text-center '}>
					<FavouritesNotFound />
				</div>
			) : (
				<div className={style.cellphone_container}>
					{currentItem
						?.filter(
							item => item.type === 'animated-series' || item.type === 'cartoon'
						)
						.map(movie => (
							<div className={style.movie}>
								<div
									className={style.movie_img}
									style={{ backgroundImage: `url(${movie.poster?.url})` }}
								></div>
								<div className={style.text_movie_cont}>
									<div className={style.mr_grid}>
										<div className={style.col1}>
											<h1 className={style.name_movie}>{movie?.name}</h1>
											<ul className={style.movie_gen}>
												<li>
													<span className={'flex items-center text-blue-500'}>
														<img
															className={'fill-amber-400'}
															src={star}
															alt=''
														/>
														{Number(movie?.rating.kp.toFixed(1))}{' '}
													</span>{' '}
													/
												</li>
												<li>{movie?.year}/</li>
												<li>{movie?.movieLength} мин /</li>
												<li>{movie.genres[0].name}</li>
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
												{movie?.shortDescription}
											</p>
										</div>
									</div>
								</div>
								<div className={style.bottom_content}>
									<div className=''>
										<Link to={`/cinema/${movie.id}/${movie.name}`}>
											<button className={style.more}>Подробнее</button>
										</Link>
									</div>
									<div className=''>
										<IsFavourites typeCinema={movie} />
									</div>
								</div>
							</div>
						))}
				</div>
			)}
		</div>
	)
}
export {}
