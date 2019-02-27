export const people = [
	{
		id: 0,
		name: 'anderson0',
		age: 201,
		gender: 'female',
	},
	{
		id: 1,
		name: 'anderson1',
		age: 202,
		gender: 'female',
	},
	{
		id: 2,
		name: 'anderson2',
		age: 203,
		gender: 'female',
	},
	{
		id: 3,
		name: 'anderson3',
		age: 204,
		gender: 'female',
	},
	{
		id: 4,
		name: 'anderson4',
		age: 205,
		gender: 'female5',
	},
];

export const getById = id => {
	const filteredPeople = people.filter(person => id === person.id);
	return filteredPeople[0];
};
