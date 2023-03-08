import React from 'react'

import style from './style.module.scss'

interface ICard {
	children: React.ReactNode
}
export const Card = ({ children }: ICard) => {
	return <div className={style.card}>{children}</div>
}
export {}
