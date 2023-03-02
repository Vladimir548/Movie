import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../../services/movie.services'
import { useAppSelector } from '../../hooks/Hooks'
import { Loading } from '../../loading/Loading'
import { Link, useNavigate } from 'react-router-dom'
import style from '../style.module.scss'
import star from '../../../img/star.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { NotFound } from '../../not-found/NotFound'

export const MovieByGenres = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	const genres = useAppSelector(state => state.genres.genre)
	const { minRating, maxRating } = useAppSelector(state => state.rating)
	const countries = useAppSelector(state => state.countries.countriesValue)
	const { withYear, byYear } = useAppSelector(state => state.year)
	const genre = genres.map(item => item.name).join(`&genres.name=`)
	const countrie = countries.map(item => item.name).join(' &countries.name=')
	console.log(genre)
	const {
		data: docs,
		error,
		isLoading
	} = useQuery(
		['docs', { genre, minRating, maxRating, countrie }],
		() =>
			MovieServices.getByGenresMovie(
				genre,
				minRating,
				maxRating,
				countrie,
				withYear,
				byYear
			),
		{
			select: ({ docs }) => docs
		}
	)
	return (
		<div>
			{/*{isLoading && <Loading />}*/}

			<div className='fixed top-[70px] left-[0px]'>
				<button
					className={
						'w-[40px] h-[40px] bg-[#00000085] rounded-3xl shadow-[0px 3px 8px 0px rgba(252, 254, 255, 0.2)]'
					}
					onClick={goBack}
				>
					<ArrowBackIcon />
				</button>
			</div>

			<div
				className={
					'max-w-[1250px] flex flex-wrap justify-center gap-3 mx-auto '
				}
			>
				{docs?.map(movieSearch => (
					<Link
						className={'flex'}
						key={movieSearch.id}
						to={`/movie/${movieSearch.id}`}
					>
						<div className={style.card}>
							<img
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
		</div>
	)
}
