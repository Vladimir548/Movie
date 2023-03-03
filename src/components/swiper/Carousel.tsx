import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'

interface ICarousel {
	children: React.ReactNode
	setwhySwiper: () => void
	whySwiper: string
}

export const Carousel = ({ children, setwhySwiper, whySwiper }: ICarousel) => {
	return (
		<div>
			{/*<Swiper*/}
			{/*	navigation={true}*/}
			{/*	modules={[Navigation]}*/}
			{/*	slidesPerView={4}*/}
			{/*	slidesPerGroup={2}*/}
			{/*	spaceBetween={20}*/}
			{/*	onSwiper={setwhySwiper}*/}
			{/*	controller={{ control: whySwiper }}*/}
			{/*>*/}
			{/*	{children}*/}
			{/*</Swiper>*/}
		</div>
	)
}
