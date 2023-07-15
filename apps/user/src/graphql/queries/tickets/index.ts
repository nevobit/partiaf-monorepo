import { gql } from "@apollo/client";

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