const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const uri = 'mongodb://localhost/tasks-app';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', function () {
    console.log("Database running on " + uri);
})