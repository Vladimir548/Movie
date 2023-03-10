import React from 'react'
import { ISimilar } from '../../models/movie.interface'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Link } from 'react-router-dom'

interface ISimiralKino {
	similarMovies?: ISimilar[]
}

export const SimilarKino = ({ similarMovies }: ISimiralKino) => {
	return (
		<div className={'flex  gap-3'}>
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				navigation={true}
				modules={[Navigation]}
				className={'mySwiper'}
				breakpoints={{
					250: {
						slidesPerView: 3,
						spaceBetween: 10
					},
					320: {
						slidesPerView: 3,
						spaceBetween: 10
					},
					640: {
						slidesPerView: 3,
						spaceBetween: 10
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 10
					}
				}}
			>
				{similarMovies?.map(item => (
					<SwiperSlide key={item.id}>
						<Link to={`/cinema/${item.id}/${item.name}`}>
							<img
								key={item.poster.url}
								className={''}
								src={item.poster.url}
								alt=''
							/>
							<p key={item.name} className={'text-[14px] font-bold pt-2'}>
								{item.name}
							</p>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
