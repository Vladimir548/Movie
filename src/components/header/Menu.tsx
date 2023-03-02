import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
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
import { Link } from 'react-router-dom'
import { CustomizedInputBase } from '../search/Search'
import { SearchModal } from '../search-modal/SearchModal'
import style from './style.module.scss'
import { NestedModal } from '../modal/Modal'
import { PlaceholderSort } from '../sort/PlaceholderSort'

interface Props {
	window?: () => Window
}

const drawerWidth = 240
const navItems = [
	{
		name: 'Главная',
		link: '/'
	},
	{
		name: 'Фильмы',
		link: '/movie'
	},
	{
		name: 'Сериалы',
		link: '/serials'
	},
	{
		name: 'Мультфильмы',
		link: '/cartoons'
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
							<Link to={item.link}>
								<ListItemText primary={item.name} />
							</Link>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	const container =
		window !== undefined ? () => window().document.body : undefined

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between'
			}}
		>
			<AppBar
				className={style.content}
				sx={{
					background: '#000',
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
						sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						<Link to={'/'}>KinoScope</Link>
					</Typography>
					<Box
						sx={{
							display: { xs: 'none', md: 'block' }
						}}
					>
						<CustomizedInputBase />
					</Box>
					<Box
						sx={{
							display: { xs: 'block', md: 'none' }
						}}
					>
						{' '}
						<SearchModal />
					</Box>
					<Box>
						<IconButton
							sx={{ fontSize: '24px' }}
							aria-label='search'
							color='inherit'
							size={'large'}
						>
							<NestedModal>
								<PlaceholderSort />
							</NestedModal>
						</IconButton>
					</Box>
					<Box
						sx={{
							display: { xs: 'none', md: 'block' }
						}}
					>
						{navItems.map(item => (
							<Button key={item.link} sx={{ color: '#fff' }}>
								<Link to={item.link}>{item.name}</Link>
							</Button>
						))}
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
						keepMounted: true // Better open performance on mobile.
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
