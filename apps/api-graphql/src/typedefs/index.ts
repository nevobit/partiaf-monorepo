const typeDefs = `

type User {
    id: String
    firstname: String
    lastname: String
    phone: String
    photo: String
    biography: String
    interests: [String]
    songs: [String]
    isPrivate: Boolean
    isVerified: Boolean
    pin: Int
    location: String
    balance: Int
    events: Int
    friend: [String]
    match: [String]
    followers: [String]
    following: [String]
    artistType: String
    workerType: String
    accountType: String
}

type Initial {
 uuid: String
 name: String
}

type Query {
 getInitialQuery: Initial
}

type Mutation {
    userSignin(phone: String!, password: String!): String
}

`;

export default typeDefs;
