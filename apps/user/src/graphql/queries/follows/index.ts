import { gql } from "@apollo/client";

export const IS_FOLLOW = gql`
query Query($followId: String) {
    isFollowUser(followId: $followId)
  }
`

export const GET_FOLLOWERS = gql`
query GetFollowers($uuid: String) {
    getFollowers(uuid: $uuid) {
      _id
      firstname
      id
      lastname
      photo
      events
    }
  }
`

export const GET_FOLLOWEDS = gql`
query GetFolloweds($uuid: String) {
    getFolloweds(uuid: $uuid) {
      _id
      firstname
      id
      lastname
      photo
      events
    }
  }
`