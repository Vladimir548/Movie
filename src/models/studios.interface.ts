export interface Studios {
	docs: Doc[]
	total: number
	limit: number
	page: number
	pages: number
}

export interface Doc {
	id: string
	subType: string
	title: string
	type: string
	movies: Movies
}

export interface Movies {
	id: number
}
