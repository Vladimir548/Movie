import React from 'react'
import { useAppSelector } from '../../hooks/Hooks'
import { Link } from 'react-router-dom'
import style from '../../movie/style.module.scss'
import star from '../../../img/star.svg'
import { FavouritesNotFound } from '../favourites-not-found/FavouritesNotFound'
import { ButtonBack } from '../../button-back/ButtonBack'

export const FavouritesSeries = () => {
	const { currentItem } = useAppSelector(state => state.favourites)

	return (
		<div className={'container'}>
			<div className={' flex flex-wrap justify-center gap-3'}>
				<div className=''>
					<ButtonBack />
				</div>
				{currentItem.filter(item => item.type === 'tv-series').length === 0 ? (
					<div className={''}>
						<FavouritesNotFound />
					</div>
				) : (
					<div className='flex justify-center gap-3 flex-wrap'>
						{currentItem
							.filter(item => item.type === 'tv-series')
							.map(item => (
								<Link
									className={'flex'}
									key={item?.id}
									to={`/cinema/${item?.id}/${item.name}`}
								>
									<div className={style.card}>
										<img
											className={style.img}
											src={item.poster?.url}
											alt={
												item.name === null ? item.alternativeName : item.name
											}
										/>
										<div className={style.descrip}>
											<div className={style.info}>
												<span className={'flex text-blue-500'}>
													<img className={'fill-amber-400'} src={star} alt='' />
													{Number(item.rating.kp.toFixed(1))}
												</span>
												<span className={'text-gray-400'}>{item.year}</span>
											</div>
											<h2 className={style.title}>{item.name}</h2>
										</div>
									</div>
								</Link>
							))}
					</div>
				)}
			</div>
		</div>
	)
}
