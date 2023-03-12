import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link, NavLink } from 'react-router-dom'
import { CustomizedInputBase } from '../search/Search'
import { SearchModal } from '../search-modal/SearchModal'
import style from './style.module.scss'
import { NestedModal } from '../modal/Modal'
import { PlaceholderSort } from '../sort/PlaceholderSort'
import HomeIcon from '@mui/icons-material/Home'
import MovieIcon from '@mui/icons-material/Movie'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import FavoriteIcon from '@mui/icons-material/Favorite'

import logo from '../../img/logo_trace.svg'
interface Props {
	window?: () => Window
}

const drawerWidth = 240
const navItems = [
	{
		name: 'Главная',
		link: '/',
		icons: <HomeIcon />
	},
	{
		name: 'Фильмы',
		link: '/movie',
		icons: <MovieIcon />
	},
	{
		name: 'Сериалы',
		link: '/serials',
		icons: <LocalMoviesIcon />
	},
	{
		name: 'Мультфильмы',
		link: '/cartoons',
		icons: <ChildCareIcon />
	}
]

export function DrawerAppBar(props: Props) {
	const { window } = props
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState)
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				<Link to={'/'}>KinoScope</Link>
			</Typography>
			<Divider sx={{ background: '#fff' }} />
			<List>
				{navItems.map(item => (
					<ListItem key={item.name} disablePadding>
						<ListItemButton
							sx={{
								textAlign: 'center',
								display: 'flex',
								justifyItems: 'center',
								flexDirection: 'column'
							}}
						>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'text-red-700' : undefined
								}
								to={item.link}
							>
								<span>{item.icons}</span>
								<ListItemText primary={item.name} />
							</NavLink>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined
	const activeStyle = {
		colors: 'red'
	}

	return (
		<Box
			className={style.menu}
			sx={{
				display: 'flex',
				justifyContent: 'space-between'
			}}
		>
			<AppBar
				className={style.content}
				sx={{
					background: 'rgba(0,0,0,0.29)',
					backdropFilter: 'blur(5px)',
					boxShadow: ' 0px 3px 8px 0px rgba(252, 254, 255, 0.2)'
				}}
				component='nav'
			>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{
							mr: 2,
							display: { sm: 'block', md: 'none' },
							width: '52px',
							height: '52px'
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						<Link className={'flex items-center'} to={'/'}>
							<img className={'bg-white rounded-[51px]'} src={logo} alt='' />
							KinoScope
						</Link>
					</Typography>

					<Box>
						<Box
							sx={{
								display: { xs: 'flex', md: 'none' },
								alignItems: 'center'
							}}
						>
							<SearchModal />
							<NestedModal>
								<PlaceholderSort />
							</NestedModal>
							<Link to={'/favourites'}>
								<FavoriteIcon />
							</Link>
						</Box>
					</Box>

					<Box
						sx={{
							display: { xs: 'none', md: 'block' }
						}}
					>
						{navItems.map(item => (
							<Button
								key={item.link}
								sx={{ color: '#fff', textTransform: 'none' }}
							>
								{' '}
								<NavLink
									className={({ isActive }) =>
										isActive ? 'text-red-700' : undefined
									}
									to={item.link}
								>
									<span>{item.icons}</span>
									{item.name}
								</NavLink>
							</Button>
						))}
					</Box>
					<Box
						sx={{
							display: { xs: 'none', md: 'flex' },
							alignItems: 'center'
						}}
					>
						<CustomizedInputBase />

						<NestedModal>
							<PlaceholderSort />
						</NestedModal>
						<Link to={'/favourites'}>
							<FavoriteIcon />
						</Link>
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true
					}}
					sx={{
						display: { ms: 'none', md: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
							background: '#000',
							color: '#fff'
						}
					}}
				>
					<Box>{drawer}</Box>
				</Drawer>
			</Box>
		</Box>
	)
}
