import React from 'react'

import { Link } from 'react-router-dom'

export const Favourites = () => {
	return (
		<div
			className={
				'mt-5 max-w-[1260px] mx-auto flex flex-wrap justify-center gap-3'
			}
		>
			<Link
				className={
					'py-3 px-5 rounded-lg border-2 border-blue-600 ease-in-out delay-300 hover:bg-blue-600'
				}
				to={'/favourites/movie'}
			>
				Избранные фильмы
			</Link>
			<Link
				className={
					'py-3 px-5 rounded-lg border-2 border-blue-600 ease-in-out delay-300 hover:bg-blue-600'
				}
				to={'/favourites/series'}
			>
				Избранные сериалы
			</Link>
		</div>
	)
}
