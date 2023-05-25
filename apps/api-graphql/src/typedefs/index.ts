const typeDefs = `

type Initial {
 uuid: String
 name: String
}

type Query {
 getInitialQuery: Initial
}
`;

export default typeDefs;
