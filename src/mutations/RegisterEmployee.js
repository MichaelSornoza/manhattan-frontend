import { gql } from 'apollo-boost';

export const SignUpEmployee = gql`
  mutation(
    $fullname: String!
    $phone: String!
    $role: Int!
    $password: String!
  ) {
    employee_signUp(
      fullname: $fullname
      phone: $phone
      role: $role
      password: $password
    ) {
      id
    }
  }
`;
