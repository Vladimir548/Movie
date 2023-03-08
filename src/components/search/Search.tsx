import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/Hooks'
import { searchValue } from '../redux/slices/searchSlices'
import { getItemDropDown } from '../redux/slices/dropwodnslice'
import { useDebounce } from '../hooks/debounced'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import { DropDown, DropDownLaptop } from '../dropdown/DropDown'

export function CustomizedInputBase() {
	const name = useAppSelector(state => state.search.name)
	const itemDrop = useAppSelector(state => state.dropdown.dropdownItem)
	const dispatch = useAppDispatch()
	const [search, setSearch] = useState<string>('')
	const debounced = useDebounce(search)
	const [dropDown, setDropDown] = useState(false)

	const handleSearchMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
		if (e.target.value.length >= 2) {
			setDropDown(true)
		}
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
		<>
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

				<IconButton
					onClick={() => dispatch(getItemDropDown(false))}
					disabled={search.trim().length < 2}
					sx={{ p: '0' }}
				>
					<Link to={`/movie/search/${name}`}>
						<SearchIcon />
					</Link>
				</IconButton>
			</Paper>
		</>
	)
}
