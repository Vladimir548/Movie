import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/Hooks'
import { useDebounce } from '../../hooks/debounced'
import { getItemDropDown } from '../../redux/slices/dropwodnslice'
import { searchValue } from '../../redux/slices/searchSlices'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import ClearIcon from '@mui/icons-material/Clear'

interface ISMobile {
	handleClose?: () => void
}
export const SearchMobile = ({ handleClose }: ISMobile) => {
	const name = useAppSelector(state => state.search.name)
	const dispatch = useAppDispatch()
	const [search, setSearch] = useState<string>('')
	const debounced = useDebounce(search)
	const handleSearchMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}
	useEffect(() => {
		const dropboltrue = async () => {
			if (search.length > 2) {
				dispatch(getItemDropDown(true))
			}
		}
		const dropbolfalse = async () => {
			if (search.length < 2) {
				dispatch(getItemDropDown(false))
			}
		}
		dispatch(searchValue(debounced))
		dropbolfalse()
		dropboltrue()
	}, [debounced])
	return (
		<div>
			<Paper
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',

					width: { md: '250px' }
				}}
			>
				<InputBase
					value={search}
					onChange={handleSearchMovie}
					sx={{ ml: 1, flex: 1, width: { sm: '150px' } }}
					placeholder='Поиск...'
					inputProps={{ 'aria-label': 'search movie' }}
				/>

				<Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />

				<IconButton onClick={handleClose} sx={{ p: '0' }}>
					<ClearIcon />
				</IconButton>
			</Paper>
		</div>
	)
}
