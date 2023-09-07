import { gql } from "@apollo/client";

export const FOLLOW_USER = gql`
mutation Mutation($followId: String) {
    followUser(followId: $followId)
  }
`

export const UNFOLLOW_USER = gql`
mutation Mutation($followId: String) {
  unfollowUser(followId: $followId)
}
`