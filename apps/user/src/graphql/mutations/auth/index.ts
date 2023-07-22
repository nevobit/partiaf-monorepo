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


export const CREATE_GOER = gql`
  mutation Mutation($data: GoerInput) {
    createGoer(data: $data) {
      amount
      cost
      date
      description
      id
      name
      image
      status
      ticket
      time
      user
    }
  }
`