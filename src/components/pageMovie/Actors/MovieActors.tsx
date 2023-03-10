import React, { FC } from 'react'

import style from './style.module.scss'
import { IPerson } from '../../../models/movie.interface'
import { Link } from 'react-router-dom'

interface IActors {
	persons?: IPerson[]
}

export const MovieActors = ({ persons }: IActors) => {
	return (
		<div className={style.person_container}>
			{persons
				?.filter(person => person.enProfession === 'actor')
				.map(person => (
					<Link to={`/person/${person.id}/${person.name}`}>
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
					</Link>
				))}
		</div>
	)
}
