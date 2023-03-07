import React, { FC } from 'react'
import { IMovie } from '../../models/movie.interface'
import { Link } from 'react-router-dom'

import style from './style.module.scss'
import star from '../../img/star.svg'

export const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<Link
			className={'flex'}
			key={movie.id}
			to={`/cinema/${movie.id}/${movie.name}`}
		>
			<div className={style.card}>
				<img
					className={style.img}
					src={movie.poster?.url}
					alt={movie.name === null ? movie.alternativeName : movie.name}
				/>
				<div className={style.descrip}>
					<div className={style.info}>
						<span className={'flex text-blue-500'}>
							<img className={'fill-amber-400'} src={star} alt='' />
							{Number(movie.rating.kp.toFixed(1))}
						</span>
						<span className={'text-gray-400'}>{movie.year}</span>
					</div>
					<h2 className={style.title}>{movie.name}</h2>
				</div>
			</div>
		</Link>
	)
}
