import React from 'react'
import { HomeCarousel } from './home-components/carousel/HomeCarousel'
import { NewCinema } from './home-components/new-kino/NewCinema'

export const Home = () => {
	return (
		<div>
			<div>
				<HomeCarousel />
			</div>
			{/*<div className={' max-w-[1260px] mx-auto '}>*/}
			{/*	<NewCinema />*/}
			{/*</div>*/}
		</div>
	)
}
