import React from 'react'
import { NewCinema } from './home-components/new-kino/NewCinema'

export const Home = () => {
	return (
		<div className=' flex justify-center'>
			<div>
				<div className=''>
					<h2>Новинки кино</h2>
					<div className=''>
						<NewCinema />
					</div>
				</div>
			</div>
		</div>
	)
}
