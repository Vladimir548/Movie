import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import style from '../../similar-kino/style.module.scss'
import { Link } from 'react-router-dom'
import { Movie } from '../../../models/person.interface'
import { useQuery } from '@tanstack/react-query'
import { PersonServices } from '../../../services/person.services'

interface ICinemaWith {
	movies?: Movie[]
}

export const CinemaWith = ({ movies }: ICinemaWith) => {
	// const idMovie = movies?.map(item => item.id).join(`&id=`)

	// const {
	// 	data: docs,
	// 	error,
	// 	isLoading
	// } = useQuery(['person-with-movie'], () =>
	// 	PersonServices.getMovieWithPerson(idMovie || '')
	// )
	return (
		<div className={' mb-5 gap-3'}>
			{movies?.map(item => (
				<Link to={`/cinema/${item.id}/${item.name}`}>
					{/*<img*/}
					{/*	key={item.poster.url}*/}
					{/*	className={style.img}*/}
					{/*	src={item.poster.url}*/}
					{/*	alt=''*/}
					{/*/>*/}

					<p key={item.name} className={style.text}>
						{item.name}
					</p>
				</Link>
			))}
		</div>
	)
}
