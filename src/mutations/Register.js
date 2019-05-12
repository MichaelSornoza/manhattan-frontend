import gql from 'graphql-tag';

export const REGISTER = gql`
  mutation(
    $email: String!
    $fullname: String!
    $phone: String!
    $city: String!
    $country: String!
    $company: String!
    $password: String!
  ) {
    signUp(
      email: $email
      fullname: $fullname
      phone: $phone
      city: $city
      country: $country
      company: $company
      password: $password
    ) {
      token
    }
  }
`;
