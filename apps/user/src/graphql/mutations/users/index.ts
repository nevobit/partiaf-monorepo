import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
mutation UpdateUser($data: UserInput) {
    updateUser(data: $data) {
      biography
      firstname
      isPrivate
      lastname
      photo
    }
  }
`