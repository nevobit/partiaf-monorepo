import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
mutation Mutation($phone: String!, $password: String!) {
    userSignin(phone: $phone, password: $password) {
      token
    }
}
  `;

  export const UPDATE_GOER = gql`
  mutation Mutation($data: GoerInput) {
    updateGoer(data: $data) {
      amount
      cost
      date
      description
      id
      name
      image
      status
      time
    }
  }
`