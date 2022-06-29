const { AuthenticationError } = require('apollo-server-express');
const { User, Opinion } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
 /* This is a query that is looking for the user that is logged in. */
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('opinions');

                return userData;
            }

            throw new AuthenticationError('You must be logged in.');
        },
/* This is a query that is looking for all users. */
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('opinions');
        },
/* This is a query that is looking for an opinion by its username. */
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('opinions');
        },
/* This is a query that is looking for an opinion by its affiliate. */
        affiliateUsers: async (parent, { affiliate }) => {
            return User.find({ affiliate })
                .select('-__v -password')
                .populate('opinions');
        },
/* This is a query that is looking for an opinion by its username. */
        opinions: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Opinion.find(params).sort({ createdAt: -1 });
        },
/* This is a query that is looking for an opinion by its id. */
        opinion: async (parent, { _id }) => {
            return Opinion.findOne({ _id });
        },
/* This is a query that is looking for an opinion by its accepted status. */
        acceptedOpinions: async (parent, { accepted }) => {
            return Opinion.find({ accepted });
        },
/* This is a query that is looking for an opinion by its affiliate. */
        affiliateOpinions: async (parent, { affiliateId }) => {
            return Opinion.find({ affiliateId });
        }
    },

    Mutation: {
/* This is the addUser mutation. It is creating a new user in the database. */
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { user, token };
        },
/* This is the login mutation. It is checking to see if the user exists in the database. If the user
does not exist, it throws an error. If the user does exist, it checks to see if the password is
correct. If the password is not correct, it throws an error. If the password is correct, it signs a
token and returns the user and token. */
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
        },
/* This is adding an opinion to the database. */
        addOpinion: async (parent, args, context) => {
            if (context.user) {
                const opinion = await Opinion.create({ ...args, username: context.user.username });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { opinions: opinion._id } },
                    { new: true }
                );

                return opinion;
            }

            throw new AuthenticationError('You must be logged in.');
        },
/* Deleting an opinion from the database. */
        deleteOpinion: async (parent, { id }, context) => {
            if (context.user) {
                const opinion = await Opinion.findByIdAndDelete(id);

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { opinions: id } },
                    { new: true }
                );

                return opinion;
            }

            throw new AuthenticationError('You must be logged in.');

        }
    }
};


module.exports = resolvers;