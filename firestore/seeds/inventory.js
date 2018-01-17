const { db } = require('../firebase');

const data = [
	{
		title: 'Flowers for Lunia',
		description: '9" x 12", oil on linen',
		quantity: 1,
		price: 1000
	},
	{
		title: 'Holly and Sebastian',
		description: '24" x 20", oil on canvas',
		quantity: 1,
		price: 1000
	},
	{
		title: 'Sentinels of Carmel',
		description: '60" x 70", oil on canvas',
		quantity: 1,
		price: 1000
	},
	{
		title: 'Pink Spray',
		description: '60" x 70", oil on canvas',
		quantity: 1,
		price: 1000
	},
	{
		title: 'What, Me Worry?',
		description: '60" x 70", oil on canvas',
		quantity: 1,
		price: 1000
	},
	{
		title: 'Roses in the Spotlight',
		description: '36" x 48", oil on canvas',
		quantity: 1,
		price: 1000
	},
	{
		title: "Mennonite Tourists at Pike's Peak",
		description: '48" x 36", oil on canvas',
		quantity: 1,
		price: 1000
	},
	{
		title: 'Tasteful Opulence',
		description: '36" x 48", oil on canvas',
		quantity: 1,
		price: 1000
	},
	{
		title: 'Arden in Rome',
		description: '6" x 4", oil on canvas',
		quantity: 1,
		price: 1000
	},
	{
		title: "Merrill's Bouquet",
		description: '36" x 36", oil on canvas',
		quantity: 1,
		price: 1000
	},
	{
		title: 'Berries at the Huntington',
		description: '60" x 70", oil on canvas',
		quantity: 1,
		price: 1000
	},
	{
		title: "Zorro's Bouquet",
		description: '36" x 36", oil on canvas',
		quantity: 1,
		price: 1000
	},
	{
		title: "Jo Anne's Bouquet",
		description: '36" x 36", oil on canvas',
		quantity: 1,
		price: 1000
	}
];

const addPainting = painting => {
	return db
		.collection('inventory')
		.doc(painting.title)
		.set(painting)
		.then(function(docRef) {
			console.log('Document written');
		})
		.catch(function(error) {
			console.error('Error adding document: ', error);
		});
};

data.forEach(painting => addPainting(painting));
