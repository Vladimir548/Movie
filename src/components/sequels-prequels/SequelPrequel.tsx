import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import { ISequelsAndPrequels } from '../../models/movie.interface'
import style from './style.module.scss'
interface ISequelPrequel {
	sequelsAndPrequels: ISequelsAndPrequels[]
}

export const SequelPrequel = ({ sequelsAndPrequels }: ISequelPrequel) => {
	return (
		<div className={' overflow-x-auto gap-3'}>
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
						slidesPerView: 4,
						spaceBetween: 10
					}
				}}
			>
				{sequelsAndPrequels?.map(item => (
					<SwiperSlide className={style.slide} key={item.id}>
						<Link to={`/cinema/${item.id}/${item.name}`}>
							<img
								className={style.img}
								key={item.poster.url}
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
