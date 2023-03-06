import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { HomeMovieServices } from '../../../services/home-movie-services'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
export const TopTen = () => {
	const {
		data: docs,
		isLoading,
		error
	} = useQuery(['docs-now-watch'], () => HomeMovieServices.getTopTenCinema(), {
		select: docs => docs
	})

	return (
		<div>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				slidesPerView={'auto'}
				slidesPerGroup={2}
				className='mySwiper'
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
				{docs?.docs.map(item => (
					<SwiperSlide className={item.poster?.url}>
						<div key={item.id} className={style.block}>
							<Link to={`/movie/${item.id}`}>
								<img key={item.poster?.url} src={item.poster?.url} alt={''} />
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
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
