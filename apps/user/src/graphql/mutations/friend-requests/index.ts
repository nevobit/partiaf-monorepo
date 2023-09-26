import { gql } from "@apollo/client";

export const SEND_REQUEST = gql`
mutation SendFriendRequest($reciverId: String) {
    sendFriendRequest(reciverId: $reciverId)
  }
`

export const ACCEPT_REQUEST = gql`
mutation Mutation($id: String) {
  acceptRequest(id: $id)
}
`