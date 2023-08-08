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
    status
    time
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
    ticket {
      hour
    }
    user {
      firstname
      lastname
    }
  }
}
`