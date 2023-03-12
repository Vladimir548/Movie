import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { PersonServices } from '../../services/person.services'
import { useParams } from 'react-router-dom'

import style from './style.module.scss'
import { CinemaWith } from './cinema-with/CinemaWith'
export const Person = () => {
	const params = useParams()
	const {
		data: persons,
		isLoading,
		error
	} = useQuery(
		['person-docs', params.id, { refetchOnWindowFocus: false }],
		() => PersonServices.getPerson(params.id || '')
	)

	return (
		<div className={'container'}>
			<div className={style.wrapper}>
				<div className={style.wrapper_col1}>
					<img src={persons?.photo} alt='' />
				</div>
				<div className={style.wrapper_col2}>
					<h1 className={style.title}>{persons?.name}</h1>
					<h3 className={style.subtitle}>{persons?.enName}</h3>
					<h2 className={style.descrip_person}>Информация</h2>
					<ul className={style.params}>
						<li>
							<span className={style.text_muted}>Возраст</span>
							<span>{persons?.age}</span>
						</li>
						<li>
							<span className={style.text_muted}>Дата рождения</span>
							<span>
								{new Date(persons?.birthday!).toLocaleDateString('ru-RU')}
							</span>
						</li>
						<li>
							<span className={style.text_muted}>Место рождения</span>
							<span>{persons?.birthPlace[0].value} </span>
						</li>
						<li>
							<span className={style.text_muted}>Профессия</span>
							<span>{persons?.profession.map(item => item.value + ' ')}</span>
						</li>
						<li>
							<span className={style.text_muted}>Рост</span>
							<span>{persons?.growth} см</span>
						</li>
					</ul>
				</div>
				<h2 className={'text-[20px] font-bold'}>
					Фильмы с участием {persons?.name}
				</h2>
				<div className='flex-wrap flex gap-4'>
					<CinemaWith movies={persons?.movies} />
				</div>
			</div>
		</div>
	)
}
