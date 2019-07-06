import gql from "graphql-tag";

export const BOARD_QUERY = gql`
  query Boards {
    boards {
      title
      columns {
        id
        title
        cards {
          id
          title
        }
      }
    }
  }
`;
