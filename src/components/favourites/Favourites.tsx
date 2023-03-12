import React from 'react'

import { Link } from 'react-router-dom'
import { ButtonBack } from '../button-back/ButtonBack'

export const Favourites = () => {
	return (
		<div className={'container'}>
			<div className={'  flex flex-wrap justify-center gap-3'}>
				<div>
					<ButtonBack />
				</div>
				<Link
					className={
						'w-[233px] flex items-center py-3 justify-center rounded-lg border-2 border-blue-600 ease-in-out delay-300 hover:bg-blue-600'
					}
					to={'/favourites/movie'}
				>
					Избранные фильмы
				</Link>
				<Link
					className={
						'w-[233px] flex items-center py-3 justify-center rounded-lg border-2 border-blue-600 ease-in-out delay-300 hover:bg-blue-600'
					}
					to={'/favourites/series'}
				>
					Избранные сериалы
				</Link>
				<Link
					className={
						'w-[233px] flex items-center py-3 justify-center rounded-lg border-2 border-blue-600 ease-in-out delay-300 hover:bg-blue-600'
					}
					to={'/favourites/cartoons'}
				>
					Избранные мультфильмы
				</Link>
			</div>
		</div>
	)
}
