import gql from "graphql-tag";

export const CardFragment = gql`
  fragment Card on Card {
    id
    title
  }
`;

export const ColumnFragment = gql`
  fragment Column on Column {
    id
    title
    cards {
      ...Card
    }
  }
`;

export const BoardFragment = gql`
  fragment Board on Board {
    title
    columns {
      ...Column
    }
  }
`;

export const BOARD_QUERY = gql`
  query Boards {
    boards {
      ...Board
    }
  }
`;
