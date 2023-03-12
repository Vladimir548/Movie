import React from 'react'
import { NewCinema } from '../home-components/new-kino/NewCinema'

import style from './style.module.scss'
import { TopTen } from '../home-components/top-10/TopTen'
import { HomeCarousel } from '../home-components/carousel/HomeCarousel'
import { TopBLock } from '../home-components/top-show-block/TopBLock'

export const Home = () => {
	return (
		<>
			<div className=''>
				<TopBLock />
			</div>
			<div className=' px-2 max-w-[1260px]  mx-auto'>
				<div className={style.block}>
					<h2 className={style.title}>Скоро на экранах</h2>
					<div className=''>
						<HomeCarousel />
					</div>
				</div>
				<div>
					<div className={style.block}>
						<h2 className={style.title}>Новинки</h2>
						<div className=''>
							<NewCinema key={2} />
						</div>
					</div>
					<div className={style.block}>
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
