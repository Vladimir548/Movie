import React from 'react'

import NotFound from '../../../img/NotFound.svg'

export const FavouritesNotFound = () => {
	return (
		<div className={'flex flex-col justify-center mt-8 mx-auto max-w-[300px]'}>
			<img className={'w-[200px]'} src={NotFound} alt='' />
			<h2 className={'text-2xl font-bold text-white'}>Список избранных пуст</h2>
		</div>
	)
}
