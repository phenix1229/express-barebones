const express = require('express');
const app = express();
// const path = require('path');
// const users = require('./models/users')
const port = process.env.PORT || '3000';
const logger = require('morgan');
const userRoutes = require('./routes/router');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(express.static('/api/users'));
app.use('/api/users', userRoutes);


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});