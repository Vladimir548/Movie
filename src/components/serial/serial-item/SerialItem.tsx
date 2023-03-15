import React, { FC } from 'react'
import { IMovie } from '../../../models/movie.interface'
import style from './style.module.scss'
import star from '../../../img/star.svg'
import { Link } from 'react-router-dom'
import { Card } from '../../card/Card'
import { IsFavourites } from '../../is-favourites/IsFavourites'

export const SerialItem: FC<{ serial: IMovie }> = ({ serial }) => {
	return (
		<div className={style.container}>
			<div className={style.cellphone_container}>
				<div className={style.movie}>
					<div
						className={style.movie_img}
						style={{ backgroundImage: `url(${serial.poster?.url})` }}
					></div>
					<div className={style.text_movie_cont}>
						<div className={style.mr_grid}>
							<div className={style.col1}>
								<h1 className={style.name_movie}>{serial?.name}</h1>
								<ul className={style.movie_gen}>
									<li>
										<span className={'flex items-center text-blue-500'}>
											<img className={'fill-amber-400'} src={star} alt='' />
											{Number(serial?.rating.kp.toFixed(1))}{' '}
										</span>{' '}
										/
									</li>
									<li>{serial?.year}/</li>
									<li>{serial?.movieLength} мин /</li>
									<li>{serial.genres[0].name}</li>
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
									{serial?.shortDescription}
								</p>
							</div>
						</div>
					</div>
					<div className={style.bottom_content}>
						<div className=''>
							<Link to={`/cinema/${serial.id}/${serial.name}`}>
								<button className={style.more}>Подробнее</button>
							</Link>
						</div>
						<div className=''>
							<IsFavourites typeCinema={serial} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
