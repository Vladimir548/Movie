export interface IMovieResponse {
	docs: IMovie[]
	limit: number
	page: number
	pages: number
	total: number
}

export interface IMovie {
	alternativeName: string
	description: string
	enName: string
	ageRating: number
	externalId: {
		imdb: string
		kpHD: string
		tmdb: number
		_id: string
	}
	genres: IGenre[]
	countries: ICountries[]
	premiere: {
		country: string
		world: string
	}
	budget: {
		value: number
		currency: string
	}
	seasonsInfo: ISeasons[]
	id: number
	logo: {
		url: string
		_id: string
	}
	backdrop: {
		previewUrl: string
		url: string
	}
	similarMovies: ISimilar[]
	sequelsAndPrequels: ISequelsAndPrequels[]
	movieLength: number
	name: string
	names: {
		name: string
		_id: string
	}
	videos: IVideos
	poster: {
		previewUrl: string
		url: string
		_id: string
	}
	persons: IPerson[]
	rating: {
		await: number
		filmCritics: number
		imdb: number
		kp: number
		russianFilmCritics: number
		_id: string
	}
	releaseYears: []
	shortDescription: string
	type: string
	votes: {
		await: number
		filmCritics: number
		imdb: number
		kp: number
		russianFilmCritics: number
		_id: string
	}
	watchability: {
		items: {
			logo: {
				url: string
				_id: string
			}
			name: string
			url: string
			_id: string
		}
		_id: string
	}
	slogan: string
	year: number
}
interface IGenre {
	name: string
}
interface ICountries {
	name: string
}
export interface IPerson {
	id: number
	photo: string
	name: string
	enProfession: string
	profession: string
}
export interface IGenres {
	name: string
	slug: string
}
export interface ISeasons {
	number: number
	episodesCount: number
}

export interface ISimilar {
	alternativeName: string
	id: number
	name: string
	type: string
	poster: {
		previewUrl: string
		url: string
	}
}

export interface ISequelsAndPrequels {
	alternativeName: string
	id: number
	name: string
	type: string
	poster: {
		previewUrl: string
		url: string
	}
}
export interface IVideos {
	teasers: string
	trailers: [
		{
			name: string
			site: string
			type: string
			url: string
		}
	]
}
