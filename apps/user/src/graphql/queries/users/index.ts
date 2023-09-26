import {gql} from '@apollo/client';

export const GET_USER_BY_ID = gql`
  query Query {
    getUserById {
      id
      artistType
      phone
      lastname
      firstname
      photo
      interests {
        food
        music
        plan
      }
      accountType
      followers
      following
      biography
      balance
      isPrivate
    }
  }
`;

export const GET_ONE_USER = gql`
query GetOneUser($id: String) {
  getOneUser(id: $id) {
    accountType
    artistType
    biography
    events
    firstname
    followers
    following
    friend
    interests {
      food
      music
      plan
    }
    isPrivate
    isVerified
    lastname
    photo
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
      specialties {
        food
        music
        plan
      }
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
    description
  }
}
`;