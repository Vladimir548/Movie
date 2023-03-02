import React, { FC } from 'react'

import style from './style.module.scss'

export const Loading: FC = () => {
	return (
		<div>
			<div className={style.loading}>
				<div className={style.one}></div>
				<div className={style.two}></div>
				<div className={style.three}></div>
			</div>
		</div>
	)
}
