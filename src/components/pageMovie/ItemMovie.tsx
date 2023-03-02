import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../services/movie.services'

import style from './style.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export const ItemMovie = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	const params = useParams()
	const [descrip, setDescrip] = useState(false)
	const {
		data: docs,
		error,
		isLoading
	} = useQuery(['docs', params.id], () =>
		MovieServices.getIDMovie(params.id || ' ')
	)
	return (
		<div
			style={{
				backgroundImage: `url(${docs?.backdrop.url})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
		>
			<div className={style.button_back}>
				<button
					className={
						'w-[40px] h-[40px] bg-[#00000085] rounded-3xl shadow-[0px 3px 8px 0px rgba(252, 254, 255, 0.2)]'
					}
					onClick={goBack}
				>
					<ArrowBackIcon />
				</button>
			</div>
			<div className={style.container}>
				<div className={style.wrapper}>
					<div className={style.wrapper_col_1}>
						<img className={style.poster} src={docs?.poster.url} alt='' />
					</div>

					<div className={style.wrapper_col_2}>
						<h1 className={style.title}>{docs?.name}</h1>
						<h6 className={style.subtitle}>{docs?.alternativeName}</h6>
						<p className={style.description}>{docs?.shortDescription}</p>
						<h2 className={style.descrip_film}>О фильме</h2>
						<ul className={style.params}>
							<li>
								<span className={style.text_muted}>Рейтинг</span>
								<span>
									{Number(docs?.rating.kp).toFixed(1)} KP{' '}
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
					<h3 className={'text-[24px] font-bold'}>Описание</h3>
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
				<div className={style.block_actors}>
					<h3 className={'text-[24px] font-bold'}>Актеры</h3>
					<div className={style.person_container}>
						{docs?.persons.map(person => (
							<div className={'flex flex-col items-center'} key={person.id}>
								<img
									key={person.photo}
									className={style.person_photo}
									src={person.photo}
									alt=''
								/>
								<span key={person.name} className={style.name_actors}>
									{person.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
