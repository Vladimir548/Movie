import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../../services/movie.services'
import { useAppDispatch, useAppSelector } from '../../hooks/Hooks'
import { MovieSearchItem } from './MovieSearchItem'
import { Link, useParams } from 'react-router-dom'
import { Loading } from '../../loading/Loading'
import { getItemDropDown } from '../../redux/slices/dropwodnslice'
import style from '../style.module.scss'
import star from '../../../img/star.svg'
import { NotFound } from '../../not-found/NotFound'
import { ButtonBack } from '../../button-back/ButtonBack'

export const MovieSearch = () => {
	const name = useAppSelector(state => state.search.name)
	const dispatch = useAppDispatch()
	const params = useParams()
	const {
		data: docs,
		error,
		isLoading
	} = useQuery(
		['docs', params.name],
		() => MovieServices.getSearchMovie(params.name || ''),
		{
			select: ({ docs }) => docs
		}
	)

	return (
		<div className={'mx-auto'}>
			<div className=''>
				<ButtonBack />
			</div>
			{isLoading && <Loading />}
			{docs?.length === 0 ? (
				<NotFound />
			) : (
				<div
					className={
						'max-w-[1250px] flex flex-wrap justify-center gap-3   mx-auto '
					}
				>
					{docs?.map(movieSearch => (
						<Link
							className={'flex justify-start'}
							key={movieSearch.id}
							to={`/movie/${movieSearch.id}`}
						>
							<div className={style.card}>
								<img
									key={movieSearch.name || movieSearch.alternativeName}
									className={style.img}
									src={movieSearch.poster?.url}
									alt={
										movieSearch.name === null
											? movieSearch.alternativeName
											: movieSearch.name
									}
								/>
								<div className={style.descrip}>
									<div className={style.info}>
										<span className={'flex text-blue-500'}>
											<img className={'fill-amber-400'} src={star} alt='' />
											{Number(movieSearch.rating.kp.toFixed(1))}
										</span>
										<span className={'text-gray-400'}>{movieSearch.year}</span>
									</div>
									<h2 className={style.title}>{movieSearch.name}</h2>
								</div>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	)
}
