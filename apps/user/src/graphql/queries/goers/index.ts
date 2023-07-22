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
    ticket
    time
    user
  }
}
`