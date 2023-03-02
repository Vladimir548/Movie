import React, { FC } from 'react'

import style from './style.module.scss'
import { IPerson } from '../../../models/movie.interface'

export const MovieActors: FC<{ persons: IPerson[] }> = ({ persons }) => {
	return (
		<div>
			<div className={style.cont}>
				<div className=''>
					<h2 className={'text-[22px]'}>Актеры</h2>
				</div>
				<div className={style.actors_list}>
					{persons?.map(person => (
						<div key={person.id} className={style.actors_item}>
							<div>
								<img
									key={person.id}
									className={style.img_actors}
									src={person.photo}
									alt=''
								/>
							</div>
							<h3>{person.name}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
