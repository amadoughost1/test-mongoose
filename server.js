require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;



mongoose
.connect(process.env.MONGO_URI, {
})
.then(() => {
 console.log('Connected to MongoDB');
})
.catch((error) => console.log(error));

//creation et sauvegarde d'une instance de person
//const person = new person({
        favoriteFoods: ['pizza', 'pasta', 'burger'],
        name: 'John', 
        age: 25,
        email: 'john@example.com'
    });

  //  person.save()   
  //  .save()
  //  .then(() => console.log('Person saved'))
  //  .catch((error) => console.log(error));