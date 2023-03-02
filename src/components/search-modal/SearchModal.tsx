import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { CustomizedInputBase } from '../search/Search'
import { DropDown } from '../dropdown/DropDown'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import { SearchMobile } from '../search/SearchMobile/SearchMobile'
export const SearchModal = () => {
	const style = {
		position: 'absolute' as 'absolute',
		top: '0%',
		left: '0%',
		width: '100%',
		bgcolor: '#001d3a',
		border: '2px solid #000',
		minHeight: '100%',
		boxShadow: 24,
		p: 1
	}
	const [open, setOpen] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div>
			<Button onClick={handleOpen}>
				<IconButton size='large' aria-label='search' color='inherit'>
					<SearchIcon />
				</IconButton>
			</Button>
			<Modal
				className={'overflow-y-auto'}
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<SearchMobile handleClose={() => handleClose()} />
					<div className={'overflow-y-auto'} onClick={handleClose}>
						<DropDown />
					</div>
				</Box>
			</Modal>
		</div>
	)
}
