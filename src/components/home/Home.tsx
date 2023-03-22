import React from 'react'
import { NewCinema } from '../home-components/new-kino/NewCinema'

import style from './style.module.scss'
import { WatchNow } from '../home-components/watch-now/WatchNow'
import { HomeCarousel } from '../home-components/carousel/HomeCarousel'
import { TopBLock } from '../home-components/top-show-block/TopBLock'
import { Link } from 'react-router-dom'

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
						<Link to={'/newcinema'}>
							<h2 className={style.title}>Новинки</h2>
						</Link>
						<div className=''>
							<NewCinema key={2} />
						</div>
					</div>
					<div className={style.block}>
						<h2 className={style.title}>Сейчас смотрят</h2>
						<div className=''>
							<WatchNow />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
