import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home/Home'
import { ItemMovie } from './components/pageMovie/ItemMovie'
import { Movie } from './components/movie/Movie'
import { DrawerAppBar } from './components/header/Menu'
import { MovieSearch } from './components/movie/movieSearch/MovieSearch'
import { MovieByGenres } from './components/movie/movieByGenres/MovieByGenres'
import { Serial } from './components/serial/Serial'
import { Favourites } from './components/favourites/Favourites'
import { FavouritesMovie } from './components/favourites/favourites-movie/FavouritesMovie'
import { FavouritesSeries } from './components/favourites/favourites-serial/FavouritesSeries'
import { Cartoon } from './components/cartoons/Cartoon'
import { FavouritesCartoons } from './components/favourites/favourites-cartoons/FavouritesCartoons'

function App() {
	return (
		<div>
			<DrawerAppBar />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/movie'} element={<Movie />} />
				<Route path={'/serials'} element={<Serial />} />
				<Route path={'/cartoons'} element={<Cartoon />} />
				<Route path={'/cinema/:id/:name'} element={<ItemMovie />} />
				<Route path={'/movie/search/:name'} element={<MovieSearch />} />
				<Route path={'/filter'} element={<MovieByGenres />} />
				<Route path={'/favourites'} element={<Favourites />} />
				<Route path={'/favourites/movie'} element={<FavouritesMovie />} />
				<Route path={'/favourites/series'} element={<FavouritesSeries />} />
				<Route path={'/favourites/cartoons'} element={<FavouritesCartoons />} />
			</Routes>
		</div>
	)
}

export default App
