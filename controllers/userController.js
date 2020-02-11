const users = require('../models/users');
const uuid = require('uuid/v4');

module.exports = {
    getAllUsers:(req, res) => {
        res.send('getAllUsers')
    }, 
    getUserById:(req, res) => {
        res.send('getUserById')
    },
    createUser:(req, res) => {
        res.send('createUser')
    }, 
    updateUser:(req, res) => {
        res.send('updateUser')
    },
    deleteUser:(req, res) => {
        res.send('deleteUser')
    }
}