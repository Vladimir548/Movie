import React, { FC } from 'react'
import style from '../serial/style.module.scss'
import Stack from '@mui/material/Stack'

interface IPagination {
	pages: number
	setPage: (num: number) => number
	count: number
	onChange: (_: any, num: number) => number
	shape: string
	color: string
	variant: string
	size: string
	className: any
	Pagination: any
}

export const Pagination = ({ pages, setPage }: IPagination) => {
	return <span></span>
}
