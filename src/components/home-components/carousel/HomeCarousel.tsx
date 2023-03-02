import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../../services/movie.services'
import { Navigation } from 'swiper'
import style from './style.module.scss'
export const HomeCarousel = () => {
	const {
		data: docs,
		error,
		isLoading
	} = useQuery(['docs'], () => MovieServices.getCarouselMovie(), {
		select: ({ docs }) => docs
	})
	console.log(docs)
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
			>
				{docs?.map(item => (
					<SwiperSlide key={item.backdrop.url}>
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
