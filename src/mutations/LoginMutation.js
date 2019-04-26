import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;
