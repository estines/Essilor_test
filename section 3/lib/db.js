var mongojs = require('mongojs');

var databaseUrl = 'essilor_mongojs';
var collections = ['Book', 'Author'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
}