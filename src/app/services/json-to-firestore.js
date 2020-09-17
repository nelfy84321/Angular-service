const firebaseConfig = {
    apiKey: "AIzaSyAPuOW0p8LvHHLqtwxWV-SO8UWatvoeWBA",
    authDomain: "inventor-fifth-hw.firebaseapp.com",
    databaseURL: "https://inventor-fifth-hw.firebaseio.com",
    projectId: "inventor-fifth-hw",
    storageBucket: "inventor-fifth-hw.appspot.com",
    messagingSenderId: "677692002788",
    appId: "1:677692002788:web:9e5dbc487c6e083f74b7f1",
    measurementId: "G-65J64N06P7"
};
const albums = require('./albums.json');
const firebase = require('firebase');

require('firebase/firestore');
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

albums.forEach(function (obj) {
    db.collection("albums")
        .add({
            name: obj.name,
            band: obj.band,
            genre: obj.genre,
            label: obj.label,
            producer: obj.producer,
            releaseDate: new Date(obj.releaseDate)
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
});