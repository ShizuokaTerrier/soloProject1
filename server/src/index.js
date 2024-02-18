const express = require('express');
const app = express();
const cors = require('cors');
const scoresController = require('./scores/scores.controller');
const usersController = require('./users/users.controller');
require('dotenv').config();

app.use(cors());
app.use(express.json());

//test
app.get('https://soloprojectbackend.onrender.com/', (req, res) => {
    res.send('I work just fine thank you...');
  });

// USER ROUTES

app.get('/user_table', usersController.allUsers); // get all users 
app.get('/user_table/:id', usersController.getSingleUser); // get a user by id 
app.post('/user_table', usersController.addANewUser); // add a new user
app.delete('/user_table/:id', usersController.deleteUser) // delete a user 
app.patch('/user_table/:id',usersController.updateUser) // updates a user


// SCORES ROUTES 

app.get('/scores', scoresController.allScores); 
app.get('/scores/:id', scoresController.getAllScoresForOne);
app.post('/scores', scoresController.addScores);
app.delete('/scores/:id', scoresController.deleteAllUsersScores);

app.listen(8123, ()=>{
    console.log("The server is listening")
})