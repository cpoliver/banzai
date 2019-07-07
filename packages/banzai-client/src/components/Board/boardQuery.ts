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

// export const BOARDS_QUERY = gql`
//   query Boards {
//     boards {
//       ...Board
//     }
//   }
// `;

export const BOARD_QUERY = gql`
  # query Board($id: ID!) {
  #   board(id: $id) {
  #     ...Board
  #   }
  # }
  query Board {
    board {
      ...Board
    }
  }
`;
