import { gql } from "@apollo/client";

export const GET_GOERS_BY_USER_ID = gql`
query GetGoersByUserId {
  getGoersByUserId {
    amount
    cost
    date
    id
    description
    image
    name
    status
    ticket {
      hour
    }
    time
  }
}
`

export const GET_GOERS_BY_ID = gql`
query GetGoersById($id: String) {
  getGoersById(id: $id) {
    amount
    cost
    date
    id
    description
    image
    name
    ticket {
      hour
      id
      date
      image
      limit
      description
      name
      image
      price
      type
    }
    status
    time
  }
}
`


export const GET_GOERS_BY_TICKET = gql`
query GetGoersByTicketId($id: String) {
  getGoersByTicketId(id: $id) {
    id
    user {
      photo
      id
    }
  }
}
`

export const GET_ONE_GOER = gql`
query GetOneGoer($id: String) {
  getOneGoer(id: $id) {
    amount
    cost
    date
    id
    description
    image
    name
    status
    time
    entry_status
    ticket {
      hour
      date
    }
    user {
      firstname
      lastname
    }
  }
}
`
