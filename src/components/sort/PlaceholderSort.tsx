import React from 'react'
import { SortGenres } from './sort-genres/SortGenres'
import { SortRatings } from './sort-ratings/SortRatings'
import { ChildModal } from '../modal/Modal'
import { SortCountries } from './sort-countries/SortCountries'
import { useAppDispatch } from '../hooks/Hooks'
import { clearGenres } from '../redux/slices/genresSLice'
import { clearCountries } from '../redux/slices/countriesSlice'
import { SortYear } from './sort-year/SortYear'
import { clearYear } from '../redux/slices/yearSlice'
export const PlaceholderSort = () => {
	const dispatch = useAppDispatch()
	return (
		<div>
			<div className=''>
				<div className=' '>
					<div className={'relative index-10'}>
						<ChildModal
							name={'Жанры'}
							dispatchFunc={() => dispatch(clearGenres())}
						>
							<SortGenres />
						</ChildModal>
					</div>
				</div>
				<div className=''>
					<div className={'relative index-10'}>
						<ChildModal
							name={'Страны'}
							dispatchFunc={() => dispatch(clearCountries())}
						>
							<SortCountries />
						</ChildModal>
					</div>
				</div>
				<div className=''>
					<div className={'relative index-10'}>
						<ChildModal
							name={'Годы'}
							dispatchFunc={() => dispatch(clearYear())}
						>
							<SortYear />
						</ChildModal>
					</div>
				</div>
				<div className='border-b-blue-100 border-2 py-2 px-3 cursor-pointer rounded-lg my-3 '>
					<SortRatings />
				</div>
			</div>
		</div>
	)
}
