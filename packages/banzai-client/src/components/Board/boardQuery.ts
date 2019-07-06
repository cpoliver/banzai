import gql from "graphql-tag";

export const QUERY_BOARDS = gql`
  query Boards {
    boards {
      title
      columns {
        title
        cards {
          title
        }
      }
    }
  }
`;
