import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/home/Home'
import { ItemMovie } from './components/pageMovie/ItemMovie'
import { Movie } from './components/movie/Movie'
import { DrawerAppBar } from './components/header/Menu'
import { MovieSearch } from './components/movie/movieSearch/MovieSearch'
import { SortGenres } from './components/sort/sort-genres/SortGenres'
import { MovieByGenres } from './components/movie/movieByGenres/MovieByGenres'
function App() {
	return (
		<div>
			<DrawerAppBar />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/movie'} element={<Movie />} />
				<Route path={'/movie/:id'} element={<ItemMovie />} />
				<Route path={'/movie/search/:name'} element={<MovieSearch />} />

				<Route path={'/movieByGenres'} element={<MovieByGenres />} />
			</Routes>
		</div>
	)
}

export default App
