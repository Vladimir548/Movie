import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { HomeMovieServices } from '../../../services/home-movie-services'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
export const NewCinema = () => {
	const {
		data: docs,
		isLoading,
		error
	} = useQuery(['docsNew'], () => HomeMovieServices.getNewCinema())

	return (
		<div>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				slidesPerGroup={2}
				className='mySwiper'
				breakpoints={{
					250: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					320: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					640: {
						slidesPerView: 3,
						spaceBetween: 10
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 10
					}
				}}
			>
				{docs?.docs.map(item => (
					<SwiperSlide className={style.block} key={item.id}>
						<Link to={`/cinema/${item.id}/${item.name}`}>
							<img
								key={item.poster?.url}
								className={style.poster}
								src={item.poster?.url}
								alt={''}
							/>
						</Link>
						<div className={style.kino_info}>
							<span
								key={item.rating?.kp}
								className={
									item.rating.kp >= 7
										? 'bg-green-500 px-2 font-bold'
										: 'bg-neutral-700 px-2 font-bold'
								}
							>
								{Number(item.rating.kp).toFixed(1)}
							</span>
						</div>
						<p className={style.name}>{item.name}</p>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
