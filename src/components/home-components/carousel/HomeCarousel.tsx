import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import { useQuery } from '@tanstack/react-query'
import { Navigation } from 'swiper'
import style from './style.module.scss'
import { HomeMovieServices } from '../../../services/home-movie-services'

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
				slidesPerView={1}
				spaceBetween={20}
				loop={true}
				navigation={true}
				modules={[Navigation]}
				breakpoints={{
					769: {
						slidesPerView: 2
					}
				}}
				className='mySwiper'
			>
				{docs?.map(item => (
					<SwiperSlide className={style.block} key={item.backdrop.url}>
						<img
							className={'relative object-cover  '}
							src={item.backdrop.url}
							alt=''
						/>
						<img className={style.logo} src={item.logo.url} alt='' />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
