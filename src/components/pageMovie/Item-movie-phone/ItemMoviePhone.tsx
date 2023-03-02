import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { MovieServices } from '../../../services/movie.services'
import style from '../style.module.scss'

export const ItemMoviePhone = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	const params = useParams()
	const {
		data: docs,
		error,
		isLoading
	} = useQuery(['docs', params.id], () =>
		MovieServices.getIDMovie(params.id || ' ')
	)
	const [descrip, setDescrip] = useState(false)
	return (
		<div className={'px-2'}>
			<div className=''>
				<div>
					<img src={docs?.poster.url} alt='' />
				</div>
				<div className='flex justify-center text-[18px]'>
					<h2>{docs?.name}</h2>
				</div>
			</div>
			<div className='info_film'>
				<div className='flex'>
					<p className={style.title_info}>Год:</p>
					<span className={style.items}>{docs?.year}</span>
				</div>
				<div className='flex'>
					<p className={style.title_info}>Продолжительность:</p>
					<span className={style.items}>{docs?.movieLength} мин</span>
				</div>
				<div className={style.block}>
					<div className={style.title}>
						<p className={style.title_info}>Рейтинг: </p>
					</div>
					<div className={style.items}>
						{Number(docs?.rating?.kp.toFixed(1))}
						<span className={style.prep}> КиноПоиск</span>
					</div>
				</div>
				<div className='flex flex-wrap'>
					<p className={style.title_info}>Жанр:</p>
					{docs?.genres.map(name => (
						<span className={style.items} key={name.name}>
							{name.name},
						</span>
					))}
				</div>
				<div className='flex flex-col flex-wrap'>
					<p className={style.title_info}>Описание:</p>
					<span
						className={descrip ? style.trueDescription : style.falseDescription}
					>
						{docs?.description}
					</span>
					<button
						className={'justify-start text-[#6255b5]'}
						onClick={() => setDescrip(prev => !prev)}
					>
						{descrip ? 'Свернуть описание' : 'Подробное описание'}
					</button>
				</div>
			</div>
		</div>
	)
}
