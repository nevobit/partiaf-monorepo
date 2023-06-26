import {gql} from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query Query {
    getUserById {
      artistType
      phone
      lastname
      firstname
      photo
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
      _id
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
      id
      name
      phone
      type
      photos
    }
  }
`;


export const GET_STORE_BY_ID = gql`
query GetStoreById($getStoreByIdId: String) {
  getStoreById(id: $getStoreByIdId) {
    id
    min_age
    name
    phone
    photos
    type
    specialties {
      food
      music
      plan
    }
  }
}
`;