import React from 'react'
import { IMovie } from '../../../models/movie.interface'
import style from './style.module.scss'
import star from '../../../img/star.svg'
import { Link } from 'react-router-dom'
import { Card } from '../../card/Card'

export const CartoonItem: React.FC<{ cartoon: IMovie }> = ({ cartoon }) => {
	return (
		<Link
			className={'flex'}
			key={cartoon.id}
			to={`/cinema/${cartoon.id}/${cartoon.name}`}
		>
			<Card>
				<img
					className={style.img}
					src={cartoon.poster?.url}
					alt={cartoon.name === null ? cartoon.alternativeName : cartoon.name}
				/>
				<div className={style.descrip}>
					<div className={style.info}>
						<span className={'flex text-blue-500'}>
							<img className={'fill-amber-400'} src={star} alt='' />
							{Number(cartoon.rating.kp.toFixed(1))}
						</span>
						<span className={'text-gray-400'}>{cartoon.year}</span>
					</div>
					<h2 className={style.title}>{cartoon.name}</h2>
				</div>
			</Card>
		</Link>
	)
}
export {}
