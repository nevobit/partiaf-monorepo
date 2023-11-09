import { gql } from "@apollo/client";

export const GET_ONE_TICKET = gql`
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

export const GET_TICKETS_BY_STORE_ID = gql`
query GetTicketsByStoreId($id: String) {
    getTicketsByStoreId(id: $id) {
      hour
      id
      image
      limit
      date
      description
      name
      image
      price
      type
      percentage
    }
  }
`

export const GET_ALL_TICKETS = gql`
query GetAllTickets {
    getAllTickets {
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