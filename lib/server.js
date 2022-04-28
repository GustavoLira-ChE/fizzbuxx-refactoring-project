const ExplorerController = require('./controllers/ExplorerController');
const express = require('express');

const app = express();

//To use JSON in the server
app.use(express.json());

//Port number
const port = 3000;

app.get('/', (request, response) => {
    response.json({message: "FizzBuzz API Welcome!"})
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`)
})