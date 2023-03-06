import React, { FC } from 'react'
import { IMovie } from '../../../models/movie.interface'
import style from './style.module.scss'
import star from '../../../img/star.svg'
import { Link } from 'react-router-dom'

export const SerialItem: FC<{ serial: IMovie }> = ({ serial }) => {
	return (
		<Link className={'flex'} key={serial.id} to={`/movie/${serial.id}`}>
			<div className={style.card}>
				<img
					className={style.img}
					src={serial.poster?.url}
					alt={serial.name === null ? serial.alternativeName : serial.name}
				/>
				<div className={style.descrip}>
					<div className={style.info}>
						<span className={'flex text-blue-500'}>
							<img className={'fill-amber-400'} src={star} alt='' />
							{Number(serial.rating.kp.toFixed(1))}
						</span>
						<span className={'text-gray-400'}>{serial.year}</span>
					</div>
					<h2 className={style.title}>{serial.name}</h2>
				</div>
			</div>
		</Link>
	)
}
