import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import { useQuery } from '@tanstack/react-query'
import { Navigation } from 'swiper'
import style from './style.module.scss'
import { HomeMovieServices } from '../../../services/home-movie-services'
import { Link } from 'react-router-dom'

export const HomeCarousel = () => {
	const {
		data: docs,
		error,
		isLoading
	} = useQuery(['docs-carousel'], () => HomeMovieServices.getCarouselMovie(), {
		select: ({ docs }) => docs
	})

	return (
		<div>
			<Swiper
				navigation={true}
				slidesPerView={'auto'}
				modules={[Navigation]}
				breakpoints={{
					320: {
						slidesPerView: 2,
						spaceBetween: 10,
						centeredSlides: true
					},
					769: {
						slidesPerView: 4,
						spaceBetween: 20
					}
				}}
				className='mySwiper'
			>
				{docs?.map(item => (
					<SwiperSlide className={style.block} key={item.poster?.url}>
						<Link to={`/cinema/${item.id}/${item.name}`}>
							<img className={style.poster} src={item.poster?.url} alt='' />
							<span className={style.name}>{item.name}</span>
						</Link>
						<span>
							Дата выхода:{' '}
							{new Date(item.premiere?.world).toLocaleDateString('ru-RU')}
						</span>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
