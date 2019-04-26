import gql from 'graphql-tag';

export const MeQuery = gql`
  {
    me {
      fullname
    }
  }
`;
