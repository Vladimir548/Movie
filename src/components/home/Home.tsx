import React from 'react'
import { NewCinema } from '../home-components/new-kino/NewCinema'

import style from './style.module.scss'
import { TopTen } from '../home-components/top-10/TopTen'
import { HomeCarousel } from '../home-components/carousel/HomeCarousel'
import background from '../../img/bgmain.jpg'

export const Home = () => {
	return (
		<>
			<div className=' px-2 max-w-[1260px]  mx-auto'>
				<div className=''>
					<h2 className={style.title}>Скоро на экранах</h2>
					<div className=''>
						<HomeCarousel />
					</div>
				</div>
				<div>
					<div className='mt-5 '>
						<h2 className={style.title}>Новинки</h2>
						<div className=''>
							<NewCinema key={2} />
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
		</>
	)
}
