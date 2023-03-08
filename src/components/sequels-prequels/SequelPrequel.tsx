import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import { ISequelsAndPrequels } from '../../models/movie.interface'

interface ISequelPrequel {
	sequelsAndPrequels: ISequelsAndPrequels[]
}

export const SequelPrequel = ({ sequelsAndPrequels }: ISequelPrequel) => {
	return (
		<div className={'flex overflow-x-auto gap-3'}>
			<Swiper
				slidesPerView={1}
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
