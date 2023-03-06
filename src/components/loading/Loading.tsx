import React, { FC } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import style from './style.module.scss'

export const Loading: FC = () => {
	return (
		<div>
			<div className={style.loading}>
				<Box sx={{ display: 'flex' }}>
					<CircularProgress />
				</Box>
			</div>
		</div>
	)
}
