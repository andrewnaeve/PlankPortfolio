const db = require('../firebase');

const data = [
  {
    title: 'Flowers for Lunia',
    description: '9" x 12", oil on linen',
    width: 702,
    height: 960,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Flowers%20for%20Lunia.jpg?alt=media&token=f3e354ee-9f93-498d-ae5e-86ed7bf76251',
    price: 1000
  },
  {
    title: 'Holly and Sebastian',
    description: '24" x 20", oil on canvas',
    width: 2269,
    height: 2716,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Holly%20and%20Sebastian.jpg?alt=media&token=7064cb47-fc73-41a2-890d-f0fab82c0234',
    price: 1000
  },
  {
    title: 'Sentinels of Carmel',
    description: '60" x 70", oil on canvas',
    width: 2199,
    height: 1886,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Lavendar.jpg?alt=media&token=35a2f631-a7bd-4c5e-83d9-82464d856983',
    price: 1000
  },
  {
    title: 'Pink Spray',
    description: '60" x 70", oil on canvas',
    width: 640,
    height: 550,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Pink%20Spray.jpg?alt=media&token=cb27eaa1-9b93-41ff-8c33-c7cbbf4f463a',
    price: 1000
  },
  {
    title: 'What, Me Worry?',
    description: '60" x 70", oil on canvas',
    width: 2039,
    height: 2699,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/What%2C%20Me%20Worry.jpg?alt=media&token=840f8700-6c9e-412e-8aef-0f5bb7697d66',
    price: 1000
  },
  {
    title: 'Roses in the Spotlight',
    description: '36" x 48", oil on canvas',
    width: 1960,
    height: 1440,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Roses%20with%20Black%20Background.jpg?alt=media&token=99da4327-33ed-4028-8835-84d4f2c152f2',
    price: 1000
  },
  {
    title: "Mennonite Tourists at Pike's Peak",
    description: '48" x 36", oil on canvas',
    width: 1971,
    height: 2741,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Mennonites.jpg?alt=media&token=da48170f-7407-427f-b39d-3043c1a53730',
    price: 1000
  },
  {
    title: 'Tasteful Opulence',
    description: '36" x 48", oil on canvas',
    width: 3392,
    height: 2598,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Vase.jpg?alt=media&token=4dd8c3b1-3228-4c39-a413-fcb5f2f93c28',
    price: 1000
  },
  {
    title: 'Arden in Rome',
    description: '6" x 4", oil on canvas',
    width: 1725,
    height: 2463,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Arden%20In%20Rome.jpg?alt=media&token=365329ef-cc23-4012-815f-e761766a621b',
    price: 1000
  },
  {
    title: "Merrill's Bouquet",
    description: '36" x 36", oil on canvas',
    width: 980,
    height: 886,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Blue%20Floral.jpg?alt=media&token=46d4909e-883f-4e4e-89ea-790c6f74de69',
    price: 1000
  },
  {
    title: 'Berries at the Huntington',
    description: '60" x 70", oil on canvas',
    width: 3453,
    height: 2704,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Berries%20at%20the%20Huntington.jpg?alt=media&token=ed10a818-4c7c-459e-9d8a-c2f9137a68fe',
    price: 1000
  },
  {
    title: "Zorro's Bouquet",
    description: '36" x 36", oil on canvas',
    width: 2362,
    height: 2382,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Flowers.jpg?alt=media&token=b685ba4b-e161-4664-9dc3-3ef8e80d251e',
    price: 1000
  },
  {
    title: "Jo Anne's Bouquet",
    description: '36" x 36", oil on canvas',
    width: 2579,
    height: 2560,
    firebaseUrl:
      'https://firebasestorage.googleapis.com/v0/b/nancyplank-ff678.appspot.com/o/Taupe.jpg?alt=media&token=a1f395fd-9cd9-4b28-8e47-4bfece779a96',
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
