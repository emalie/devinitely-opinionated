const { AuthenticationError } = require('apollo-server-express');
const { User, Opinion } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('opinions');

                return userData;
            }

            throw new AuthenticationError('You must be logged in.');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('opinions');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('opinions');
        },
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find(params).sort({ createdAt: -1 });
        },
        thought: async (parent, { id }) => {
            return Thought.findOne({ _id });
        }
    },
};


module.exports = resolvers;