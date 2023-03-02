import React, { SetStateAction, useState } from 'react'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { ApplyBtn } from '../sort/button/ApplyBtn'
import { CloseBtn } from '../sort/button/CloseBtn'
import TuneIcon from '@mui/icons-material/Tune'
import { ClearBtn } from '../sort/button/ClearBtn'
import IconButton from '@mui/material/IconButton'

interface PropsModal {
	children: React.ReactNode
	name?: string
	dispatchFunc?: () => void
}
const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { xs: '300px', sm: '400px' },
	bgcolor: 'background.black',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3
}

export function ChildModal({ children, name, dispatchFunc }: PropsModal) {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<React.Fragment>
			<div
				onClick={handleOpen}
				className=' border-2 py-2 px-3 cursor-pointer rounded-lg my-3 hover:border-blue-600'
			>
				<h2 className={'text-white font-bold'}>{name}</h2>
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='child-modal-title'
				aria-describedby='child-modal-description'
			>
				<Box
					className={'bg-black/[.9] rounded-lg overflow-y-auto'}
					sx={{ ...style }}
				>
					{children}
					<div className='flex justify-center items-center gap-4 mt-2'>
						<CloseBtn>
							<button onClick={handleClose}>Закрыть</button>
						</CloseBtn>
						<ClearBtn>
							<button onClick={dispatchFunc}>Очистить</button>
						</ClearBtn>
					</div>
				</Box>
			</Modal>
		</React.Fragment>
	)
}

export function NestedModal({ children }: PropsModal) {
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
			<Box>
				<IconButton
					onClick={handleOpen}
					aria-label='search'
					color='inherit'
					size={'large'}
				>
					<TuneIcon fontSize={'inherit'} />
				</IconButton>
			</Box>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='parent-modal-title'
				aria-describedby='parent-modal-description'
			>
				<Box className={'bg-black/[.9] rounded-lg'} sx={{ ...style }}>
					{children}
					<div className='flex justify-center gap-2'>
						<ApplyBtn>
							<Link to={'/movieByGenres'}>
								<span onClick={handleClose}>Применить</span>
							</Link>
						</ApplyBtn>
						<CloseBtn>
							<span onClick={handleClose}>Закрыть</span>
						</CloseBtn>
					</div>
				</Box>
			</Modal>
		</div>
	)
}
