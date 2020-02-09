const express = require('express');
const app = express();
const port = process.env.PORT || '3000';
const logger = require('morgan');
const userRoutes = require('./routes/router');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/users', userRoutes);


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});