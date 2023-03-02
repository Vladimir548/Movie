import React, { FC } from 'react'
import { IMovie, IMovieResponse } from '../../../models/movie.interface'

export const MovieSearchItem: FC<{ movieSearch: IMovie }> = ({
	movieSearch
}) => {
	return <div>{movieSearch.name}</div>
}
