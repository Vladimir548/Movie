import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../../services/movie.services'
import { useAppSelector } from '../../hooks/Hooks'
import { Loading } from '../../loading/Loading'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import style from './style.module.scss'
import star from '../../../img/star.svg'
import { NotFound } from '../../not-found/NotFound'
import { ButtonBack } from '../../button-back/ButtonBack'
import { Card } from '../../card/Card'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { IsFavourites } from '../../is-favourites/IsFavourites'

export const MovieByGenres = () => {
	useEffect(() => {})

	const navigate = useNavigate()
	const genres = useAppSelector(state => state.genres.genre)
	const { minRating, maxRating } = useAppSelector(state => state.rating)
	const countries = useAppSelector(state => state.countries.countriesValue)
	const { withYear, byYear } = useAppSelector(state => state.year)
	const genre = genres.map(item => item.name).join(`&genres.name=`)
	console.log(genres)
	const countrie = countries.map(item => item.name).join(' &countries.name=')
	const [page, setPage] = useState(1)
	const {
		data: docs,
		error,
		isLoading
	} = useQuery(
		['docs', { genre, minRating, maxRating, countrie, page }],
		() =>
			MovieServices.getByGenresMovie(
				genre,
				minRating,
				maxRating,
				countrie,
				withYear,
				byYear,
				page
			),
		{}
	)
	return (
		<div className={style.container}>
			{isLoading && <Loading />}
			<ButtonBack />
			{docs?.docs.length === 0 ? (
				<NotFound />
			) : (
				<div className={style.cellphone_container}>
					{docs?.docs.map(movie => (
						<div className={style.movie}>
							<div
								className={style.movie_img}
								style={{ backgroundImage: `url(${movie.poster?.url})` }}
							></div>
							<div className={style.text_movie_cont}>
								<div className={style.mr_grid}>
									<div className={style.col1}>
										<h1 className={style.name_movie}>{movie?.name}</h1>
										<ul className={style.movie_gen}>
											<li>
												<span className={'flex items-center text-blue-500'}>
													<img className={'fill-amber-400'} src={star} alt='' />
													{Number(movie?.rating.kp.toFixed(1))}{' '}
												</span>{' '}
												/
											</li>
											<li>{movie?.year}/</li>
											<li>{movie?.movieLength} мин /</li>
											<li>{movie.genres[0].name}</li>
										</ul>
									</div>
								</div>
								<div className={style.mr_grid}>
									<div className={style.col2}>
										<ul className={style.movie_likes}></ul>
									</div>
								</div>
								<div className={style.mr_grid}>
									<div className={style.col1}>
										<p className={style.movie_description}>
											{movie?.shortDescription}
										</p>
									</div>
								</div>
							</div>
							<div className={style.bottom_content}>
								<div className=''>
									<Link to={`/cinema/${movie.id}/${movie.name}`}>
										<button className={style.more}>Подробнее</button>
									</Link>
								</div>
								<div className=''>
									<IsFavourites typeCinema={movie} />
								</div>
							</div>
						</div>
					))}
				</div>
			)}
			<Stack className={'my-3 flex justify-center mx-auto '} spacing={2}>
				<Box sx={{ size: { xs: 'small', sm: 'large' } }}>
					<Pagination
						count={docs?.pages}
						onChange={(_, num) => setPage(num)}
						shape='circular'
						color='primary'
						variant='outlined'
						siblingCount={0}
						className={style.pagination}
					/>
				</Box>
			</Stack>
		</div>
	)
}
