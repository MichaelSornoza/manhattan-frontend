import gql from 'graphql-tag';

export const UpdateEmployee = gql`
  mutation($id: ID!, $fullname: String, $role: Int, $phone: String) {
    update_my_employee(id: $id, fullname: $fullname, role: $role, phone: $phone)
  }
`;
