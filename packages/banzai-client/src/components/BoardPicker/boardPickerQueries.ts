import gql from "graphql-tag";

export const BOARDS_QUERY = gql`
  query Boards {
    boards {
      id
      title
    }
  }
`;
