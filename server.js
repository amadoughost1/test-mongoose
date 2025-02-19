require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 6000;



mongoose
.connect(process.env.MONGO_URI, {
})
.then(() => {
 console.log('Connected to MongoDB');
})
.catch((error) => console.log(error));

//creation et sauvegarde d'une instance de person
const personSchema = new mongoose.Schema({ 
    name: { type: String, required: true },   
    age: Number,    
    favoriteFoods: [String],
    email: String
  }); 
  const Person = mongoose.model('Person', personSchema);

  const person = new Person({
    favoriteFoods: ['pizza', 'pasta', 'burger'],
    name: 'John', 
    age: 25,
    email: 'john@example.com'
  });

  person.save()
    .then(() => console.log('Person saved'))
    .catch((error) => console.log(error));

  
  //Créer de nombreux documents avec Model.create() 
    const arrayOfPeople = [
      { name: 'Alice', age: 25, favoriteFoods: ['Sushi', 'Tacos'] },
      { name: 'Bob', age: 35, favoriteFoods: ['Pasta', 'Steak'] }
    ];
    
    async function createPeople() {
      try {
        const data = await Person.create(arrayOfPeople);
        console.log("Personnes créées avec succès :", data);
      } catch (err) {
        console.log("Erreur lors de la création des personnes :", err);
      }
    }
    
   // Rechercher des documents avec Model.find()
   async function findPeople() {
     try {
       const people = await Person.find({ name: 'John' });
       console.log("Personnes trouvées :", people);
     } catch (err) {
       console.log("Erreur de recherche :", err);
     }
   }
   
   findPeople();

  //  Utiliser Model.findOne() pour retourner un seul document
  Person.findOne({ favoriteFoods: 'Pizza' })
  .then(person => {
    console.log("Personne trouvée :", person);
  })
  .catch(err => {
    console.log("Erreur de recherche :", err);
  });

  // Utiliser Model.findById() pour rechercher un seul document par _id
  Person.findById('67b47c64d632d47c1581e8ee')
    .then(person => {
      console.log("Personne trouvée par _id :", person);
    })
    .catch(err => {
      console.log("Erreur de recherche par _id :", err);
    });

    // Utiliser Model.findOneAndUpdate() pour mettre à jour un document
    Person.findOneAndUpdate({ name: 'John' }, { age: 20 }, { new: true })
    .then(updatedPerson => {
      console.log("Personne mise à jour :", updatedPerson);
    })
    .catch(err => {
      console.log("Erreur de mise à jour :", err);
    });

    






  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })