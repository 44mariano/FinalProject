const mongoose = require('mongoose');

// connect to MongoDB database

mongoose.connect('mongodb://localhost:27017/Films.films');
const db = mongoose.connection;

// film schema

const filmSchema = new mongoose.Schema({

    id: {type: String, required: true, unique: true},   // unique identifier
    title: {type: String},
    rating: {type: String},
    year: {type: Integer},
    length: {type: Integer} // in minutes

});

// film model

const filmModel = mongoose.model('Film', filmSchema);

// contact form schema

const formSchema = new mongoose.Schema({

    name: {type: String},
    email: {type: String},
    message: {type: String},
    date: {type: Date}

});

// form model

const formModel = mongoose.model('Form', formSchema);


// CRUD operations (for films)

// insertOne

db.collection.insertOne(

    {
        id: 'a1',
        title: 'Example Title',
        rating: 'PG-13',
        year: 2008,
        length: 125
    }

);

// find

db.collection.find(

    {
        id: 'a1' // search for film with this unique id
    }

);

// update

db.collection.updateOne(
    {
        id: 'a1' // update with this id
    },
    {
        title: 'New Example Title' // change to this title
    }
);

// delete

db.collection.deleteOne(
    {
        id: 'a1'
    }
);