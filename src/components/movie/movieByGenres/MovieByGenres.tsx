import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../../services/movie.services'
import { useAppSelector } from '../../hooks/Hooks'
import { Loading } from '../../loading/Loading'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import style from '../style.module.scss'
import star from '../../../img/star.svg'
import { NotFound } from '../../not-found/NotFound'
import { ButtonBack } from '../../button-back/ButtonBack'
import { Card } from '../../card/Card'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export const MovieByGenres = () => {
	useEffect(() => {})
	const location = useLocation()
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	const genres = useAppSelector(state => state.genres.genre)
	const { minRating, maxRating } = useAppSelector(state => state.rating)
	const countries = useAppSelector(state => state.countries.countriesValue)
	const { withYear, byYear } = useAppSelector(state => state.year)
	const genre = genres.map(item => item.name).join(`&genres.name=`)
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
		<div>
			<div>
				<ButtonBack />
			</div>
			{isLoading && <Loading />}

			{docs?.docs.length === 0 ? (
				<NotFound />
			) : (
				<div
					className={
						'max-w-[1250px] flex flex-wrap justify-center gap-3 mx-auto '
					}
				>
					{docs?.docs.map(movieSearch => (
						<Link
							className={'flex'}
							key={movieSearch.id}
							to={`/cinema/${movieSearch.id}/${movieSearch.name}`}
						>
							<Card>
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
							</Card>
						</Link>
					))}
				</div>
			)}
			<Stack className={'my-3 flex justify-center mx-auto'} spacing={1}>
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
