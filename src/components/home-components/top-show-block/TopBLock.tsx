import React from 'react'

import style from './style.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Parallax, Navigation, Autoplay } from 'swiper'
import { useQuery } from '@tanstack/react-query'
import { HomeMovieServices } from '../../../services/home-movie-services'

import star from '../../../img/star-gold.svg'
import { Link } from 'react-router-dom'
export const TopBLock = () => {
	const {
		data: docs,
		isLoading,
		error
	} = useQuery(
		['docs-backdrop'],
		() => HomeMovieServices.getBackdropMovie(),
		{}
	)

	return (
		<div>
			<Swiper
				speed={1000}
				parallax={true}
				loop={true}
				autoplay={{
					delay: 5500,
					disableOnInteraction: false
				}}
				modules={[Parallax, Autoplay, Navigation]}
				className='mySwiper'
				breakpoints={{
					250: {
						navigation: false,
						modules: [Parallax, Autoplay]
					},
					768: {
						navigation: true,
						modules: [Parallax, Autoplay, Navigation]
					}
				}}
			>
				{docs?.docs.map(item => (
					<SwiperSlide
						style={{
							backgroundImage: `url(${item.backdrop.url})`
						}}
						key={item.id}
						className={style.slide}
					>
						<div className={style.title} data-swiper-parallax='-1000'>
							{item?.name}
						</div>
						<div className={style.subtitle} data-swiper-parallax='-700'>
							{item?.alternativeName}
						</div>
						<div className={style.text} data-swiper-parallax='-500'>
							<p>{item?.shortDescription}</p>
						</div>
						<ul data-swiper-parallax='-200' className={style.info}>
							<li className={style.year}>
								<span>{item?.year}</span>
							</li>
							<li className={style.age_rating}>
								<span>{item?.ageRating}+</span>
							</li>

							<li className={style.rating}>
								<span>
									<img src={star} alt='' />
								</span>
								<p>{Number(item?.rating.kp).toFixed(1)}</p>
							</li>
						</ul>
						<div className={style.btn} data-swiper-parallax='-400'>
							<button className={style.btn_trailers}>
								<a target='_blank' href={item?.videos.trailers[0].url}>
									Трейлер
								</a>
							</button>
							<button className={style.btn_more}>
								<Link to={`/cinema/${item?.id}/${item?.name}`}>Подробнее</Link>
							</button>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
