let movies = [
	{
		id: 0,
		name: 'anderson0',
		score: 6,
	},
	{
		id: 1,
		name: 'anderson1',
		score: 6,
	},
	{
		id: 2,
		name: 'anderson2',
		score: 6,
	},
	{
		id: 3,
		name: 'anderson3',
		score: 6,
	},
	{
		id: 4,
		name: 'anderson4',
		score: 6,
	},
];

export const getMovies = () => movies;

export const getById = id => {
	const filteredMovies = movies.filter(movie => id === movie.id);
	return filteredMovies[0];
};

export const deleteMovie = id => {
	const cleanedMovies = movies.filter(movie => movie.id !== id);
	if (movies.length > cleanedMovies.length) {
		movies = cleanedMovies;
		return true;
	} else {
		return false;
	}
};

export const addMovie = (name, score) => {
	const newMovie = {
		id: `${movies.length + 1}`,
		name,
		score,
	};
	movies.push(newMovie);
	return newMovie;
};
