import React from 'react'
import { Movie } from './movie/Movie'
import { HomeCarousel } from './home-components/carousel/HomeCarousel'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Home = () => {
	return (
		<div>
			<div>
				<HomeCarousel />
			</div>
			<div className={' max-w-[1260px] mx-auto '}></div>
		</div>
	)
}
