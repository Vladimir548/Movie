import React, { FC } from 'react'
import style from './style.module.scss'
import star from '../../../img/star.svg'
import { Link } from 'react-router-dom'
import { IsFavourites } from '../../is-favourites/IsFavourites'
import { IMovie } from '../../../models/movie.interface'

export const NewsCinemaItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={style.container}>
			<div className={style.cellphone_container}>
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
											<img className={'fill-amber-400'} src={star} alt='' />
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
			</div>
		</div>
	)
}
