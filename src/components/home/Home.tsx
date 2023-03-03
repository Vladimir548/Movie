import React from 'react'
import { NewCinema } from '../home-components/new-kino/NewCinema'

import style from './style.module.scss'
import { TopTen } from '../home-components/top-10/TopTen'
import { HomeCarousel } from '../home-components/carousel/HomeCarousel'

export const Home = () => {
	return (
		<div className=' px-2 max-w-[1260px] mx-auto'>
			<HomeCarousel />
			<div>
				<div className='mt-5 '>
					<h2 className={style.title}>Новинки</h2>
					<div className=''>
						<NewCinema />
					</div>
				</div>
				<div>
					<h2 className={style.title}>Сейчас смотрят</h2>
					<div className=''>
						<TopTen />
					</div>
				</div>
			</div>
		</div>
	)
}
