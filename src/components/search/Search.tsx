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
import searchIcon from '../../img/search.svg'
import style from './style.module.scss'

export function CustomizedInputBase() {
	const name = useAppSelector(state => state.search.name)
	const itemDrop = useAppSelector(state => state.dropdown.dropdownItem)
	const dispatch = useAppDispatch()
	const [search, setSearch] = useState<string>('')
	const debounced = useDebounce(search)
	const [dropDown, setDropDown] = useState(false)

	const handleSearchMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
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
			<div className={style.box}>
				<div className={style.container_1}>
					<input
						value={search}
						onChange={handleSearchMovie}
						type='text'
						className={style.search}
						placeholder='Поиск...'
					/>

					<button disabled={search.trim().length < 2} className={style.icon}>
						<Link to={`/movie/search/${name}`}>
							<img src={searchIcon} alt='' />
						</Link>
					</button>
				</div>
			</div>
			{/*<IconButton*/}
			{/*	onClick={() => dispatch(getItemDropDown(false))}*/}
			{/*	disabled={search.trim().length < 2}*/}
			{/*	sx={{ p: '0' }}*/}
			{/*>*/}
			{/*	<Link to={`/movie/search/${name}`}>*/}
			{/*		<SearchIcon />*/}
			{/*	</Link>*/}
			{/*</IconButton>*/}
		</>
	)
}
