const typeDefs = `

type InterestsType {
 music: [String]
 plan: [String]
 food: [String]
}

input Interests {
    music: [String]
    plan: [String]
    food: [String]
}

input UserInput {
    firstname: String
    lastname: String
    phone: String
    photo: String
    password: String
    accountType: String
    interests: Interests
}


type User {
    _id: String
    id: String
    firstname: String
    lastname: String
    phone: String
    photo: [String]
    biography: String
    interests: InterestsType
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

type Specialties{
    music: [String]
    plan: [String]
    food: [String]
}

type Store{
    id: String
    name: String
    type: String
    phone: String
    min_age: Int
    photos: [String]
    specialties: Specialties
    description: String
    status: String
}

type Ticket{
    id: String
    name: String
    type: String
    limit: Int
    hour: String
    price: String
    min_age: Int
    image: String
    description: String
    status: String
    percentage: String
}


type AuthPayload {
    token: String
}


type Query {
    getUserById: User
    getAllUsers: [User]
    getAllStores: [Store]
    getStoreById(id: String): Store
    getTicketsByStoreId(id: String): [Ticket]
}
   

type Mutation {
    userSignin(phone: String!, password: String!): AuthPayload
    userSignup(userData: UserInput): AuthPayload
}

`;

export default typeDefs;
