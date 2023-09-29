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

export const CANCEL_REQUEST = gql`
mutation Mutation($recieverId: String) {
  cancelRequest(recieverId: $recieverId)
}
`

export const REJECTED_REQUEST = gql`
mutation RejectRequest($recieverId: String) {
  rejectRequest(recieverId: $recieverId)
}
`