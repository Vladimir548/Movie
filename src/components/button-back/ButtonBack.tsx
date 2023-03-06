import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

export const ButtonBack = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	return (
		<div className={'fixed z-10 left-2 top-20'}>
			<button
				className={
					'w-[40px] h-[40px] bg-[#00000085] rounded-3xl shadow-[0px 3px 8px 0px rgba(252, 254, 255, 0.2)]'
				}
				onClick={goBack}
			>
				<ArrowBackIcon />
			</button>
		</div>
	)
}
