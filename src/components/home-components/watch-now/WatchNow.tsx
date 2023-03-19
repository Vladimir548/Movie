import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { HomeMovieServices } from '../../../services/home-movie-services'
import 'swiper/css'
import 'swiper/css/navigation'
export const WatchNow = () => {
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
				style={{}}
				slidesPerView={'auto'}
				className='mySwiper'
				navigation={true}
				modules={[Navigation]}
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
					<SwiperSlide key={item.id} className={item.poster?.url}>
						<div key={item.id} className={style.block}>
							<Link to={`/cinema/${item.id}/${item.name}`}>
								<img
									className={style.poster}
									key={item.poster?.url}
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
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
