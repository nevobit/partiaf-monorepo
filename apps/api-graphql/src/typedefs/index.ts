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
    photo: [String]
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
    stores: [Store]
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

type Goer {
    id: String
    user: User
    status: String
    cost: Float
    time: String
    ticket: Ticket
    amount: Int
    image: String
    name: String
    description: String
    date: String
}

input GoerInput {
    user: String
    status: String
    cost: Float
    time: String
    ticket: String
    amount: Int
    image: String
    name: String
    description: String
    date: String
}

type AuthPayload {
    token: String
}


type Query {
    getUserById: User
    getOneUser(id: String): User
    getAllUsers: [User]
    getAllStores: [Store]
    getStoreById(id: String): Store
    getTicketsByStoreId(id: String): [Ticket]
    getAllTickets: [Ticket]
    getGoersByUserId: [Goer]
    getOneGoer(id: String): Goer
    getGoersById(id: String): [Goer]
    getGoersByTicketId(id: String): [Goer]
}
   

type Mutation {
    userSignin(phone: String!, password: String!): AuthPayload
    userSignup(userData: UserInput): AuthPayload
    createGoer(data: GoerInput): Goer
    registerStore(code: String): User

}

`;

export default typeDefs;
