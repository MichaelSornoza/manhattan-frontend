import gql from 'graphql-tag';

export const DeleteEmployee = gql`
  mutation($id: ID!) {
    delete_my_employee(id: $id)
  }
`;
