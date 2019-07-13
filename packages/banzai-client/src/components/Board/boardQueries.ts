import gql from "graphql-tag";

export const LabelFragment = gql`
  fragment Label on Label {
    id
    color
    title
  }
`;

export const CardFragment = gql`
  fragment Card on Card {
    id
    title
    labels {
      ...Label
    }
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
  query Board($id: ID!) {
    board(id: $id) {
      ...Board
    }
  }
`;
