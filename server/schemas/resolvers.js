const { AuthenticationError } = require('apollo-server-express');
const { User, Opinion } = require('../models');
const { signToken } = require('../utils/auth');

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
        opinions: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Opinion.find(params).sort({ createdAt: -1 });
        },
        opinion: async (parent, { id }) => {
            return Opinion.findOne({ _id });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { user, token };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Invalid email.');
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Invalid password.');
            }

            const token = signToken(user);
            return { user, token };
        }
    }
};


module.exports = resolvers;