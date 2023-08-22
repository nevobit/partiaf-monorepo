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
    }
  }
`;