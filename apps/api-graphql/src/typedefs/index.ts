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
    token: String
    photo: [String]
    password: String
    biography: String
    accountType: String
    isPrivate: Boolean
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
    token: String
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
    date: String
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
    entry_status: String
    name: String
    description: String
    date: String
}


input GoerInput {
    id: String
    user: String
    status: String
    cost: Float
    time: String
    ticket: String
    amount: Int
    hour: String
    image: String
    name: String
    description: String
    date: String
    entry_status: String
}

type AuthPayload {
    token: String
}

type Request {
    id: String
    senderId: User
    reciverId: String
    status_request: String
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
    isFollowUser(followId: String): Boolean
    getFollowers(uuid: String): [User]
    getFolloweds(uuid: String): [User]
    isFriend(reciverId: String): Boolean
    isRequest(reciverId: String): Boolean
    getFriends(uuid: String): [User]
    pendingRequests(uuid: String): [Request]
}
   

type Mutation {
    userSignin(phone: String!, password: String!): AuthPayload
    userSignup(userData: UserInput): AuthPayload
    createGoer(data: GoerInput): Goer
    updateGoer(data: GoerInput): Goer
    registerStore(code: String): User
    updateUser(data: UserInput): User
    deleteUser: Boolean
    followUser(followId: String): Boolean
    unfollowUser(followId: String): Boolean
    sendFriendRequest(uuid: String, reciverId: String): Boolean
    acceptRequest(id: String): Boolean
    cancelRequest(recieverId: String): Boolean
    rejectRequest(recieverId: String): Boolean
}

`;

export default typeDefs;
