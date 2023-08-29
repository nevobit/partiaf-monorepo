import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
mutation Mutation($phone: String!, $password: String!) {
    userSignin(phone: $phone, password: $password) {
      token
    }
}
  `;
