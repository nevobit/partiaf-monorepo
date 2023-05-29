import {gql} from '@apollo/client';

export const REGISTER_USER = gql`
  mutation UserSignup($userData: UserInput) {
    userSignup(userData: $userData) {
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Mutation($phone: String!, $password: String!) {
    userSignin(phone: $phone, password: $password) {
      token
    }
  }
`;
