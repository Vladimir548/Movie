import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../../services/movie.services'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { HomeMovieServices } from '../../../services/home-movie-services'
export const NewCinema = () => {
	const {
		data: docs,
		isLoading,
		error
	} = useQuery(['docs'], () => HomeMovieServices.getNewCinema(), {
		select: ({ docs }) => docs
	})
	console.log(docs)
	return (
		<div>
			<div className=''>
				<h2>Новинки</h2>
			</div>

			{docs?.map(item => (
				<img key={item.poster._id} src={item.poster?.previewUrl} alt='' />
			))}
		</div>
	)
}
