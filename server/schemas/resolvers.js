const { AuthenticationError } = require('apollo-server-express');
const { User, Opinion } = require('../models');

const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello world!';
        }
    }
};


module.exports = resolvers;