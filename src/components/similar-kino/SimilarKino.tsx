import React from 'react'
import { ISimilar } from '../../models/movie.interface'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import style from './style.module.scss'
interface ISimilarKino {
	similarMovies?: ISimilar[]
}

export const SimilarKino = ({ similarMovies }: ISimilarKino) => {
	return (
		<div className={' mb-20 gap-3'}>
			<Swiper
				spaceBetween={20}
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
						slidesPerView: 5,
						spaceBetween: 10
					}
				}}
			>
				{similarMovies?.map(item => (
					<SwiperSlide className={style.slide} key={item.id}>
						<Link to={`/cinema/${item.id}/${item.name}`}>
							<img
								key={item.poster.url}
								className={style.img}
								src={item.poster.url}
								alt=''
							/>
							<p key={item.name} className={style.text}>
								{item.name}
							</p>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
