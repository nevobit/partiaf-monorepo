import {gql} from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query Query {
    getUserById {
      artistType
      phone
      lastname
      firstname
      accountType
      followers
      following
    }
  }
`;

export const GET_USER_BALANCE = gql`
  query Query {
    getUserById {
      balance
    }
  }
`;

export const GET_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      accountType
      artistType
      balance
      biography
      events
      firstname
      followers
      following
      friend
      id
      isPrivate
      isVerified
      lastname
      location
      photo
      interests {
        food
        music
        plan
      }
    }
  }
`;

export const GET_STORES = gql`
  query GetAllStores {
    getAllStores {
      name
      phone
      type
    }
  }
`;
