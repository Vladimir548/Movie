import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../services/movie.services'
import style from './style.module.scss'

import { SimilarKino } from '../similar-kino/SimilarKino'
import { MovieActors } from './Actors/MovieActors'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from '../hooks/Hooks'
import {
	addToFavorites,
	removeToFavorites
} from '../redux/slices/favouritesSlice'
import { ButtonBack } from '../button-back/ButtonBack'
import { Loading } from '../loading/Loading'
import { SequelPrequel } from '../sequels-prequels/SequelPrequel'
export const ItemMovie = () => {
	const dispatch = useAppDispatch()
	const { currentItem } = useAppSelector(state => state.favourites)

	const params = useParams()
	const [descrip, setDescrip] = useState(false)
	const {
		data: docs,
		error,
		isLoading
	} = useQuery(['docs', params.id], () =>
		MovieServices.getIDMovie(params.id || ' ')
	)
	const isInFavourites = currentItem.some(item => item.id === docs?.id)
	if (error) return <h1>Произошла ошибка:(</h1>
	return (
		<div
			style={{
				backgroundImage: `url(${docs?.backdrop.url})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
		>
			<div className=''>{isLoading && <Loading />}</div>
			<div>
				<ButtonBack />
			</div>
			<div className={style.container}>
				<div className={style.wrapper}>
					<div className={style.wrapper_col_1}>
						<img className={style.poster} src={docs?.poster?.url} alt='' />
					</div>

					<div className={style.wrapper_col_2}>
						<div className='flex justify-between'>
							<h1 className={style.title}>{docs?.name}</h1>
							<span
								className='cursor-pointer'
								onClick={
									isInFavourites
										? () => dispatch(removeToFavorites(docs!.id))
										: () => dispatch(addToFavorites(docs!))
								}
							>
								{isInFavourites ? (
									<FavoriteIcon color={'error'} />
								) : (
									<FavoriteBorderIcon color={'error'} />
								)}
							</span>
						</div>
						<h6 className={style.subtitle}>{docs?.alternativeName}</h6>
						<p className={style.description}>{docs?.shortDescription}</p>

						<h2 className={style.descrip_film}>
							О {docs?.type === 'movie' ? 'фильме' : 'сериале'}
						</h2>
						<ul className={style.params}>
							<li>
								<span className={style.text_muted}>Рейтинг</span>
								<span>
									{Number(docs?.rating.kp).toFixed(1)} Kp{' '}
									{Number(docs?.rating?.imdb).toFixed(1)} IMDB
								</span>
							</li>
							<li>
								<span className={style.text_muted}>Год производства</span>
								{docs?.year}
							</li>
							<li>
								<span className={style.text_muted}>Страна</span>{' '}
								{docs?.countries.map(country => (
									<>{country.name}, </>
								))}
							</li>
							<li>
								<span className={style.text_muted}>Жанр</span>
								<span>
									{docs?.genres.map(genre => (
										<span className={style.text_muted}>{genre.name}, </span>
									))}
								</span>
							</li>
							<li>
								<span className={style.text_muted}>Слоган</span>{' '}
								<span className={style.text_muted}>«{docs?.slogan}»</span>
							</li>
							<li>
								<span className={style.text_muted}>Бюджет</span>{' '}
								{docs?.budget.value} {docs?.budget.currency}
							</li>
							<li>
								<span className={style.text_muted}>Время</span>
								<time className={style.text_muted}>
									{docs?.movieLength} мин.
								</time>
							</li>
						</ul>
					</div>
				</div>
				<div>
					<h3 className={'text-[24px] font-bold '}>Описание</h3>
					<p className={descrip ? style.falseDescrip : style.trueDescrip}>
						{docs?.description}
					</p>
					<button
						className={'text-[#7364D4]'}
						onClick={() => setDescrip(prev => !prev)}
					>
						{descrip ? 'Скрыть описание' : 'Подробное описание'}
					</button>
				</div>

				{docs?.type === 'tv-series' && docs?.seasonsInfo.length >= 1 ? (
					<div>
						<h3 className={'text-[25px] font-bold'}>Информация о сезонах</h3>
						<div className='  flex flex-wrap gap-5'>
							{docs?.seasonsInfo.map(season => (
								<div>
									<span>
										Сезон: {season.number} Серий: {season.episodesCount}
									</span>
								</div>
							))}
						</div>
					</div>
				) : (
					''
				)}
				<div className={style.block_actors}>
					<h3 className={'text-[24px] font-bold'}>Актеры</h3>
					<MovieActors persons={docs?.persons} />
				</div>
				{docs?.sequelsAndPrequels?.length !== 0 ? (
					<div className={style.similar_kino}>
						<h3>Сиквелы и приквелы</h3>
						<div className=''>
							<SequelPrequel
								key={docs?.id}
								sequelsAndPrequels={docs?.sequelsAndPrequels!}
							/>
						</div>
					</div>
				) : (
					''
				)}
				{docs?.similarMovies?.length !== 0 ? (
					<div className={style.similar_kino}>
						<h3>Похожие</h3>
						<div className=''>
							<SimilarKino key={docs?.id} similarMovies={docs?.similarMovies} />
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}
