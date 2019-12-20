const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');
const cars = [
    {
        brand: "Audi", 
        model: "A3", 
        id: 1, 
        price: 16000,
        kms: 2333000, 
        location: "Barcelona", 
        year: 2016, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }, 
    {
        brand: "BMW", 
        model: "X3", 
        id: 2, 
        kms: 2333000, 
        location: "Barcelona", 
        year: 2018, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }, 
    {
        brand: "Honda", 
        model: "Accord", 
        id: 3, 
        kms: 2333000, 
        location: "Barcelona", 
        year: 2016, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }, 
    {
        brand: "Toyota", 
        model: "Auris", 
        id: 4, 
        kms: 2333000, 
        location: "Barcelona", 
        year: 2016, 
        category: "Sedan", 
        tag: "Ocasión", 
        photo: "/photos/car.png"
    }
    ];
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBZqNFlg3JRJ8rqx6mMfmve5-xy0H7N1vg',
  authDomain: 'skycars-e37ee.firebaseapp.com',
  projectId: 'skycars-e37ee'
});
const db = firebase.firestore();
cars.forEach((obj) => {
  db.collection('adv').add({
    brand: obj.brand, 
    model: obj.model, 
    id: obj.id, 
    kms: obj.kms, 
    location: obj.location, 
    year: obj.year, 
    category: obj.category, 
    tag: obj.tag, 
    photo: obj.photo
  }).then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
});