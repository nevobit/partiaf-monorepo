import { gql } from "@apollo/client";


export const IS_FRIEND = gql`
query Query($reciverId: String) {
  isFriend(reciverId: $reciverId)
}
`
export const IS_REQUEST = gql`
query Query($reciverId: String) {
    isRequest(reciverId: $reciverId)
  }
`

export const GET_FRIENDS = gql`
query GetFriends($uuid: String) {
    getFriends(uuid: $uuid) {
      photo
      lastname
      firstname
    }
  }
`

export const GET_PENDING_FRIENDS = gql`
query PendingRequests($uuid: String) {
    pendingRequests(uuid: $uuid) {
      id
      senderId {
        id
        phone
        firstname
        lastname
      }
      reciverId
      status_request
    }
  }
`