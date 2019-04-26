import gql from 'graphql-tag';

export const TEAM_QUERY = gql`
  {
    me {
      employees {
        role
        fullname
        phone
      }
    }
  }
`;
