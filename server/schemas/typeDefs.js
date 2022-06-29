const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID,
    email: String,
    password: String,
    opinions: [Opinion],
    affiliate: Boolean,
    affiliatedWith: String
  }

  type Opinion {
    createdAt: String,
    opinionText: String,
    username: String,
    accepted: Boolean,
    affiliateId: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String): User
    affiliateUsers(affiliate: Boolean): [User]
    opinions: [Opinion]
    opinion(_id: ID!): Opinion
    acceptedOpinions(accepted: Boolean): [Opinion]
    affiliateOpinions(affiliateId: ID): [Opinion]
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    login(email: String!, password: String!): Auth
    addOpinion(opinionText: String, username: String!): Opinion
    deleteOpinion(id: ID!): Opinion
  }
`;

module.exports = typeDefs;