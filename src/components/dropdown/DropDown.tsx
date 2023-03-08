import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../services/movie.services'
import { useAppDispatch, useAppSelector } from '../hooks/Hooks'
import { Loading } from '../loading/Loading'
import { Link } from 'react-router-dom'
import { getItemDropDown } from '../redux/slices/dropwodnslice'
import star from '../../img/star.svg'

export const DropDown = () => {
	const name = useAppSelector(state => state.search.name)

	const dispatch = useAppDispatch()
	const {
		data: docs,
		error,
		isLoading
	} = useQuery(['docs', name], () => MovieServices.dropMovie(name), {
		select: ({ docs }) => docs
	})

	return (
		<div className={'overflow-y-auto'}>
			{isLoading && <Loading />}
			{docs?.map(movie => (
				<Link to={`/cinema/${movie.id}/${movie.name}`}>
					<div
						onClick={() => dispatch(getItemDropDown(false))}
						className={
							'px-3 py-2 flex h-[120px] border-b-2 delay-100 ease-in-out hover:bg-[#003971]'
						}
					>
						<div className=''>
							<img
								className={'max-w-[80px max-h-[105px] pr-5'}
								src={movie.poster?.url}
								alt=''
							/>
						</div>
						<div className=''>
							<h1 className={' text-[14px] font-bold'}>{movie.name}</h1>
							<p className={'first-letter:uppercase'}>{movie.type}</p>
							<span className={'flex text-blue-500'}>
								<img className={'fill-amber-400'} src={star} alt='' />
								{Number(movie.rating.kp.toFixed(1))}
							</span>
							<span className={'text-gray-400'}>{movie.year}</span>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export const DropDownLaptop = () => {
	const name = useAppSelector(state => state.search.name)
	const {
		data: docs,
		error,
		isLoading
	} = useQuery(['docs', name], () => MovieServices.dropMovie(name), {
		select: ({ docs }) => docs
	})
	return (
		<div>
			<ul className={'relative'}>
				{docs?.map(movie => (
					<li
						className={
							'px-3 py-2 flex h-[120px] border-b-2 delay-100 ease-in-out hover:bg-[#003971]'
						}
					>
						<img src={movie.poster?.url} alt='' />
						<div className=''>
							<h1 className={' text-[14px] font-bold'}>{movie.name}</h1>
							<p className={'first-letter:uppercase'}>{movie.type}</p>
							<span className={'flex text-blue-500'}>
								<img className={'fill-amber-400'} src={star} alt='' />
								{Number(movie.rating.kp.toFixed(1))}
							</span>
							<span className={'text-gray-400'}>{movie.year}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
