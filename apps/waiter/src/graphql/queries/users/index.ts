import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query Query {
    getUserById {
      id
      artistType
      phone
      lastname
      firstname
      photo
      accountType
      followers
      following
      balance
      stores{
        id
        name
      }
    }
  }
`;


export const GET_TICKETS_BY_STORE_ID = gql`
query GetTicketsByStoreId($id: String) {
    getTicketsByStoreId(id: $id) {
      hour
      id
      image
      limit
      description
      name
      image
      price
      type
      percentage
    }
  }
`

export const GET_GOERS_BY_TICKET_ID = gql`
query GetGoersByTicketId($id: String) {
  getGoersByTicketId(id: $id) {
    cost
    amount
    date
    description
    id
    image
    name
    status
    time
    user {
      photo
      phone
      lastname
      firstname
    }
  }
}
`

export const REGISTER_STORE = gql`
mutation Mutation($code: String) {
  registerStore(code: $code) {
    stores {
      id
      name
    }
  }
}
`